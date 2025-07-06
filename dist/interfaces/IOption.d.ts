/**
 * Common interface that all option classes must implement
 * This ensures consistency across all plugin options
 */
export interface IOption {
    /**
     * Unique identifier for the option
     */
    readonly id: string;
    /**
     * Display name shown in the checkbox list
     */
    readonly name: string;
    /**
     * Brief description of what this option does
     */
    readonly description: string;
    /**
     * Execute the callback for this option
     * This method is called when the option is selected and confirmed
     */
    execute(): Promise<void> | void;
}
//# sourceMappingURL=IOption.d.ts.map