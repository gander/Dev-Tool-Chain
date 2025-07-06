import type { IOption } from '../interfaces/IOption';
/**
 * Release option implementation
 * Handles release-related functionality
 */
export declare class ReleaseOption implements IOption {
    readonly id = "release";
    readonly name = "Release";
    readonly description = "Release management with Release-IT";
    /**
     * Execute the release callback
     */
    execute(): Promise<void>;
}
//# sourceMappingURL=ReleaseOption.d.ts.map