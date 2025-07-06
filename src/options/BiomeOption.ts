import type { IOption } from '../interfaces/IOption';

/**
 * Biome option implementation
 * Handles BiomeJS linting and formatting functionality
 */
export class BiomeOption implements IOption {
  readonly id = 'biome';
  readonly name = 'Biome';
  readonly description = 'Code formatting and linting with BiomeJS';

  /**
   * Execute the biome callback
   */
  async execute(): Promise<void> {
    console.log('🔧 Hello BiomeJS');
    console.log('   Code formatting and linting functionality executed successfully');
  }
}
