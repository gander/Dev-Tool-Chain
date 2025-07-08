# Contributing to CLI Options Manager

Thank you for your interest in contributing to the CLI Options Manager! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. Test your changes: `npm start`

## Development Workflow

### Setting up your development environment

1. Ensure you have Node.js 18+ installed
2. Install TypeScript globally (optional): `npm install -g typescript`
3. Install project dependencies: `npm install`

### Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the project structure
3. Build and test your changes:
   ```bash
   npm run build
   npm start
   ```

4. Commit your changes with a descriptive message:
   ```bash
   git commit -m "Add feature: description of what you added"
   ```

### Adding New Options

To add a new development tool option:

1. Create a new file in `src/options/` following the naming convention `YourToolOption.ts`
2. Implement the `IOption` interface:
   ```typescript
   import type { IOption } from '../interfaces/IOption';

   export class YourToolOption implements IOption {
     readonly id = 'yourtool';
     readonly name = 'Your Tool';
     readonly description = 'Brief description of your tool';

     async execute(): Promise<void> {
       console.log('Hello Your Tool');
       // Implementation here
     }
   }
   ```

3. Register your option in `src/services/PluginManager.ts`
4. Test your new option thoroughly

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public methods
- Maintain consistent indentation (2 spaces)
- Use `readonly` for interface properties
- Follow the existing error handling patterns

### Testing

Currently, the project uses manual testing. When adding new features:

1. Test the interactive CLI interface
2. Verify all existing options still work
3. Test your new option in isolation and with other options
4. Test edge cases (no selection, cancellation, etc.)

### Documentation

- Update README.md if you add new features
- Add JSDoc comments for new classes and methods
- Update this file if you change the contribution process

## Pull Request Process

1. Ensure your code builds without errors
2. Test your changes thoroughly
3. Update documentation as needed
4. Create a pull request with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Steps to test the changes

## Code Review

All submissions require review before merging. Please be patient and responsive to feedback.

## Questions?

If you have questions about contributing, feel free to open an issue for discussion.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.