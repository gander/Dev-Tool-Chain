import type { IOption } from '../interfaces/IOption';
/**
 * Biome option implementation
 * Handles BiomeJS linting and formatting functionality
 */
export declare class BiomeOption implements IOption {
    readonly id = "biome";
    readonly name = "Biome";
    readonly description = "Code formatting and linting with BiomeJS";
    /**
     * Execute the biome callback
     */
    execute(): Promise<void>;
}
//# sourceMappingURL=BiomeOption.d.ts.map