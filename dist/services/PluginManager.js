"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginManager = void 0;
const ReleaseOption_1 = require("../options/ReleaseOption");
const ChangelogOption_1 = require("../options/ChangelogOption");
const BiomeOption_1 = require("../options/BiomeOption");
const LefthookOption_1 = require("../options/LefthookOption");
/**
 * Plugin manager responsible for loading and managing all available options
 * This class implements the plugin architecture allowing easy extensibility
 */
class PluginManager {
    options = new Map();
    constructor() {
        this.loadOptions();
    }
    /**
     * Load all available option classes
     * To add new options, simply import the class and add it to this method
     */
    loadOptions() {
        const optionClasses = [
            ReleaseOption_1.ReleaseOption,
            ChangelogOption_1.ChangelogOption,
            BiomeOption_1.BiomeOption,
            LefthookOption_1.LefthookOption
        ];
        optionClasses.forEach(OptionClass => {
            try {
                const option = new OptionClass();
                this.options.set(option.id, option);
            }
            catch (error) {
                console.error(`Failed to load option: ${OptionClass.name}`, error);
            }
        });
    }
    /**
     * Get all available options as an array
     * Used for displaying in the checkbox selection
     */
    getAllOptions() {
        return Array.from(this.options.values());
    }
    /**
     * Get a specific option by its ID
     */
    getOption(id) {
        return this.options.get(id);
    }
    /**
     * Execute selected options by their IDs
     */
    async executeSelectedOptions(selectedIds) {
        console.log('\n🔄 Executing selected options...\n');
        for (const id of selectedIds) {
            const option = this.getOption(id);
            if (option) {
                try {
                    await option.execute();
                    console.log(''); // Add spacing between options
                }
                catch (error) {
                    console.error(`❌ Error executing ${option.name}:`, error);
                }
            }
            else {
                console.error(`❌ Option with ID '${id}' not found`);
            }
        }
    }
    /**
     * Get the count of available options
     */
    getOptionCount() {
        return this.options.size;
    }
}
exports.PluginManager = PluginManager;
//# sourceMappingURL=PluginManager.js.map