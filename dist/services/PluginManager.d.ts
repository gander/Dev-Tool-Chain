import type { IOption } from '../interfaces/IOption';
/**
 * Plugin manager responsible for loading and managing all available options
 * This class implements the plugin architecture allowing easy extensibility
 */
export declare class PluginManager {
    private options;
    constructor();
    /**
     * Load all available option classes
     * To add new options, simply import the class and add it to this method
     */
    private loadOptions;
    /**
     * Get all available options as an array
     * Used for displaying in the checkbox selection
     */
    getAllOptions(): IOption[];
    /**
     * Get a specific option by its ID
     */
    getOption(id: string): IOption | undefined;
    /**
     * Execute selected options by their IDs
     */
    executeSelectedOptions(selectedIds: string[]): Promise<void>;
    /**
     * Get the count of available options
     */
    getOptionCount(): number;
}
//# sourceMappingURL=PluginManager.d.ts.map