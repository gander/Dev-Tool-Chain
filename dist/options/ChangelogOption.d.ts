import type { IOption } from '../interfaces/IOption';
/**
 * Changelog option implementation
 * Handles changelog generation functionality
 */
export declare class ChangelogOption implements IOption {
    readonly id = "changelog";
    readonly name = "Changelog";
    readonly description = "Generate changelog with git-cliff";
    /**
     * Execute the changelog callback
     */
    execute(): Promise<void>;
}
//# sourceMappingURL=ChangelogOption.d.ts.map