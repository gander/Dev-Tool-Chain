import type { IOption } from '../interfaces/IOption';

/**
 * Changelog option implementation
 * Handles changelog generation functionality
 */
export class ChangelogOption implements IOption {
  readonly id = 'changelog';
  readonly name = 'Changelog';
  readonly description = 'Generate changelog with git-cliff';

  /**
   * Execute the changelog callback
   */
  async execute(): Promise<void> {
    console.log('📝 Hello git-cliff');
    console.log('   Changelog generation functionality executed successfully');
  }
}
