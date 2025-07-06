"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const PluginManager_1 = require("./services/PluginManager");
/**
 * CLI class responsible for handling user interactions
 * Uses inquirer.js for interactive checkbox prompts
 */
class CLI {
    pluginManager;
    constructor() {
        this.pluginManager = new PluginManager_1.PluginManager();
    }
    /**
     * Start the interactive CLI application
     */
    async start() {
        try {
            console.log('🚀 Welcome to the CLI Options Manager');
            console.log('════════════════════════════════════════\n');
            // Check if any options are available
            const availableOptions = this.pluginManager.getAllOptions();
            if (availableOptions.length === 0) {
                console.log('❌ No options available. Please check your plugin configuration.');
                return;
            }
            console.log(`Found ${this.pluginManager.getOptionCount()} available option(s)\n`);
            // Create checkbox choices from available options
            const choices = availableOptions.map(option => ({
                name: `${option.name} - ${option.description}`,
                value: option.id,
                checked: false
            }));
            // Prompt user for option selection
            const answers = await inquirer_1.default.prompt({
                type: 'checkbox',
                name: 'selectedOptions',
                message: 'Select the options you want to execute:',
                choices: choices
            });
            // Check if any options were selected
            if (answers.selectedOptions.length === 0) {
                console.log('❌ No options selected. Please try again.');
                return;
            }
            // Confirm selection
            if (answers.selectedOptions.length > 0) {
                const selectedNames = answers.selectedOptions
                    .map((id) => this.pluginManager.getOption(id)?.name)
                    .filter(Boolean)
                    .join(', ');
                const confirmAnswer = await inquirer_1.default.prompt({
                    type: 'confirm',
                    name: 'proceed',
                    message: `Execute the following options: ${selectedNames}?`,
                    default: true
                });
                if (confirmAnswer.proceed) {
                    await this.pluginManager.executeSelectedOptions(answers.selectedOptions);
                    console.log('✅ All selected options executed successfully!');
                }
                else {
                    console.log('❌ Operation cancelled by user.');
                }
            }
        }
        catch (error) {
            console.error('❌ An error occurred while running the CLI:', error);
            process.exit(1);
        }
    }
    /**
     * Display help information
     */
    displayHelp() {
        console.log('CLI Options Manager');
        console.log('===================');
        console.log('');
        console.log('This CLI allows you to select and execute multiple options using checkboxes.');
        console.log('');
        console.log('Available commands:');
        console.log('  node dist/index.js        Start the interactive CLI');
        console.log('  node dist/index.js --help Show this help message');
        console.log('');
        console.log('Available options:');
        const options = this.pluginManager.getAllOptions();
        options.forEach(option => {
            console.log(`  • ${option.name}: ${option.description}`);
        });
    }
}
exports.CLI = CLI;
//# sourceMappingURL=cli.js.map