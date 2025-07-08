# CLI Options Manager

A TypeScript Node.js CLI application that provides an interactive checkbox interface for managing various development tools and processes. Built with a modular plugin architecture that allows easy extensibility.

## Features

- **Interactive CLI Interface**: Uses checkbox selection for multiple options
- **Plugin Architecture**: Each tool is implemented as a separate, self-contained option
- **Easy Extensibility**: Add new tools by simply implementing the `IOption` interface
- **TypeScript Support**: Full TypeScript implementation with strict type checking
- **Modular Design**: Clean separation of concerns with clear interfaces

## Available Options

The application currently includes the following development tools:

- **Release**: Release management with Release-IT
- **Changelog**: Generate changelog with git-cliff
- **Biome**: Code formatting and linting with BiomeJS
- **Lefthook**: Git hooks management with lefthook

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cli-options-manager
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

## Usage

### Running the Application

```bash
npm start
```

Or directly with Node.js:

```bash
node dist/index.js
```

### Interactive Interface

1. The application will display a checkbox list of available options
2. Use the following controls:
   - `Space` - Select/deselect individual options
   - `a` - Toggle all options
   - `i` - Invert selection
   - `Enter` - Proceed with selected options
3. Confirm your selection when prompted
4. The application will execute all selected options sequentially

### Help

To display help information:

```bash
node dist/index.js --help
```

## Development

### Project Structure

```
src/
├── interfaces/
│   └── IOption.ts          # Common interface for all options
├── options/
│   ├── BiomeOption.ts      # Biome functionality
│   ├── ChangelogOption.ts  # Changelog functionality
│   ├── LefthookOption.ts   # Lefthook functionality
│   └── ReleaseOption.ts    # Release functionality
├── services/
│   └── PluginManager.ts    # Central registry for options
├── cli.ts                  # CLI interface logic
└── index.ts               # Application entry point
```

### Adding New Options

To add a new development tool:

1. Create a new file in `src/options/` (e.g., `NewToolOption.ts`)
2. Implement the `IOption` interface:

```typescript
import type { IOption } from '../interfaces/IOption';

export class NewToolOption implements IOption {
  readonly id = 'newtool';
  readonly name = 'New Tool';
  readonly description = 'Description of the new tool';

  async execute(): Promise<void> {
    console.log('Hello New Tool');
    // Add your tool's functionality here
  }
}
```

3. Register the option in `src/services/PluginManager.ts`:

```typescript
import { NewToolOption } from '../options/NewToolOption';

// Add to the optionClasses array in loadOptions()
const optionClasses = [
  ReleaseOption,
  ChangelogOption,
  BiomeOption,
  LefthookOption,
  NewToolOption  // Add your new option here
];
```

4. Rebuild the application:

```bash
npm run build
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Build and run the application
- `npm test` - Run tests (placeholder)

### TypeScript Configuration

The project uses strict TypeScript configuration with:
- ES2022 target
- CommonJS modules
- Strict type checking
- Source maps for debugging

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Adam Gąsowski

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- Integration with actual development tools
- Configuration file support
- Custom plugin loading
- Parallel execution of options
- Progress indicators
- Command-line argument support for non-interactive mode