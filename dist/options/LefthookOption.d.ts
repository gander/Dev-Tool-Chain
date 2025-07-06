import type { IOption } from '../interfaces/IOption';
/**
 * Lefthook option implementation
 * Handles git hooks management functionality
 */
export declare class LefthookOption implements IOption {
    readonly id = "lefthook";
    readonly name = "Lefthook";
    readonly description = "Git hooks management with lefthook";
    /**
     * Execute the lefthook callback
     */
    execute(): Promise<void>;
}
//# sourceMappingURL=LefthookOption.d.ts.map