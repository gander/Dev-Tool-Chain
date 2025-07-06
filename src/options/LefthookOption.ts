import type { IOption } from '../interfaces/IOption';

/**
 * Lefthook option implementation
 * Handles git hooks management functionality
 */
export class LefthookOption implements IOption {
  readonly id = 'lefthook';
  readonly name = 'Lefthook';
  readonly description = 'Git hooks management with lefthook';

  /**
   * Execute the lefthook callback
   */
  async execute(): Promise<void> {
    console.log('🎣 Hello lefthook');
    console.log('   Git hooks management functionality executed successfully');
  }
}
