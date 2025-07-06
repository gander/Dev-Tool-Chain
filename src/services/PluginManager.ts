import type { IOption } from '../interfaces/IOption';
import { ReleaseOption } from '../options/ReleaseOption';
import { ChangelogOption } from '../options/ChangelogOption';
import { BiomeOption } from '../options/BiomeOption';
import { LefthookOption } from '../options/LefthookOption';

/**
 * Plugin manager responsible for loading and managing all available options
 * This class implements the plugin architecture allowing easy extensibility
 */
export class PluginManager {
  private options: Map<string, IOption> = new Map();

  constructor() {
    this.loadOptions();
  }

  /**
   * Load all available option classes
   * To add new options, simply import the class and add it to this method
   */
  private loadOptions(): void {
    const optionClasses = [
      ReleaseOption,
      ChangelogOption,
      BiomeOption,
      LefthookOption
    ];

    optionClasses.forEach(OptionClass => {
      try {
        const option = new OptionClass();
        this.options.set(option.id, option);
      } catch (error) {
        console.error(`Failed to load option: ${OptionClass.name}`, error);
      }
    });
  }

  /**
   * Get all available options as an array
   * Used for displaying in the checkbox selection
   */
  getAllOptions(): IOption[] {
    return Array.from(this.options.values());
  }

  /**
   * Get a specific option by its ID
   */
  getOption(id: string): IOption | undefined {
    return this.options.get(id);
  }

  /**
   * Execute selected options by their IDs
   */
  async executeSelectedOptions(selectedIds: string[]): Promise<void> {
    console.log('\n🔄 Executing selected options...\n');

    for (const id of selectedIds) {
      const option = this.getOption(id);
      if (option) {
        try {
          await option.execute();
          console.log(''); // Add spacing between options
        } catch (error) {
          console.error(`❌ Error executing ${option.name}:`, error);
        }
      } else {
        console.error(`❌ Option with ID '${id}' not found`);
      }
    }
  }

  /**
   * Get the count of available options
   */
  getOptionCount(): number {
    return this.options.size;
  }
}
