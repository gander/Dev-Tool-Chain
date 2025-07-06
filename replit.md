# CLI Options Manager

## Overview

This is a TypeScript-based CLI application that provides an interactive interface for managing various development tools and processes. The application uses a plugin architecture where each tool (like BiomeJS, git-cliff, lefthook, and Release-IT) is implemented as a separate option that users can select and execute through an interactive checkbox interface.

## System Architecture

The application follows a modular, plugin-based architecture with clear separation of concerns:

- **CLI Layer**: Handles user interaction through inquirer.js
- **Plugin Manager**: Orchestrates available options and their execution
- **Option Interface**: Defines a common contract for all tool implementations
- **Individual Options**: Self-contained implementations for each development tool

This architecture allows for easy extensibility - new tools can be added by simply implementing the IOption interface and registering them in the PluginManager.

## Key Components

### Core Files
- `src/index.ts`: Entry point with error handling and command-line argument processing
- `src/cli.ts`: Interactive CLI interface using inquirer.js for checkbox selection
- `src/services/PluginManager.ts`: Central registry for all available options
- `src/interfaces/IOption.ts`: Interface defining the contract for all tool options

### Option Implementations
- `src/options/BiomeOption.ts`: Code formatting and linting with BiomeJS
- `src/options/ChangelogOption.ts`: Changelog generation with git-cliff
- `src/options/LefthookOption.ts`: Git hooks management with lefthook
- `src/options/ReleaseOption.ts`: Release management with Release-IT

### Configuration
- `tsconfig.json`: TypeScript configuration with strict type checking and ESNext modules
- `package.json`: Dependencies focused on CLI interaction and TypeScript execution

## Data Flow

1. **Application Start**: Entry point validates arguments and initializes CLI
2. **Option Discovery**: PluginManager loads all available option classes
3. **User Interaction**: CLI presents checkbox interface with available options
4. **Selection Validation**: Ensures at least one option is selected
5. **Execution**: Selected options are executed in sequence
6. **Completion**: Success/failure feedback provided to user

## External Dependencies

### Core Dependencies
- **inquirer**: Interactive command-line prompts (v12.7.0)
- **typescript**: TypeScript compiler (v5.8.3)
- **ts-node**: TypeScript execution environment (v10.9.2)
- **@types/inquirer**: TypeScript definitions for inquirer (v9.0.8)

### Target Tools (Not Yet Integrated)
The application is designed to integrate with:
- BiomeJS (code formatting and linting)
- git-cliff (changelog generation)
- lefthook (git hooks management)
- Release-IT (release management)

## Deployment Strategy

The application is configured as a Node.js CLI tool with:
- TypeScript compilation targeting ES2022
- ESNext module system with node resolution
- Source maps and declarations enabled for debugging
- Strict type checking for code quality
- Ready for npm package distribution with shebang entry point

To extend the application:
1. Create a new option class implementing IOption interface
2. Add the class to PluginManager's loadOptions method
3. The new option will automatically appear in the CLI interface

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 06, 2025: Initial setup completed
- July 06, 2025: Fixed TypeScript compilation issues by switching from ES modules to CommonJS
- July 06, 2025: Application successfully tested - all 4 options (Release, Changelog, Biome, Lefthook) working correctly
- July 06, 2025: Each option displays proper "Hello" messages as requested

## Changelog

- July 06, 2025: Complete CLI application with interactive checkbox selection implemented