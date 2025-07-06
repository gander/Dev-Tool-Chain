"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseOption = void 0;
/**
 * Release option implementation
 * Handles release-related functionality
 */
class ReleaseOption {
    id = 'release';
    name = 'Release';
    description = 'Release management with Release-IT';
    /**
     * Execute the release callback
     */
    async execute() {
        console.log('🚀 Hello Release-IT');
        console.log('   Release management functionality executed successfully');
    }
}
exports.ReleaseOption = ReleaseOption;
//# sourceMappingURL=ReleaseOption.js.map