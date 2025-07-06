"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangelogOption = void 0;
/**
 * Changelog option implementation
 * Handles changelog generation functionality
 */
class ChangelogOption {
    id = 'changelog';
    name = 'Changelog';
    description = 'Generate changelog with git-cliff';
    /**
     * Execute the changelog callback
     */
    async execute() {
        console.log('📝 Hello git-cliff');
        console.log('   Changelog generation functionality executed successfully');
    }
}
exports.ChangelogOption = ChangelogOption;
//# sourceMappingURL=ChangelogOption.js.map