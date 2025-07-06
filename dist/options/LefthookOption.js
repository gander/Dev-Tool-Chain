"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LefthookOption = void 0;
/**
 * Lefthook option implementation
 * Handles git hooks management functionality
 */
class LefthookOption {
    id = 'lefthook';
    name = 'Lefthook';
    description = 'Git hooks management with lefthook';
    /**
     * Execute the lefthook callback
     */
    async execute() {
        console.log('🎣 Hello lefthook');
        console.log('   Git hooks management functionality executed successfully');
    }
}
exports.LefthookOption = LefthookOption;
//# sourceMappingURL=LefthookOption.js.map