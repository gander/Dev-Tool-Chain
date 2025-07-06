#!/usr/bin/env node

import { CLI } from './cli';

/**
 * Entry point for the CLI application
 * Handles command line arguments and starts the appropriate functionality
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  
  // Check for help flag
  if (args.includes('--help') || args.includes('-h')) {
    const cli = new CLI();
    cli.displayHelp();
    return;
  }

  // Start the interactive CLI
  try {
    const cli = new CLI();
    await cli.start();
  } catch (error) {
    console.error('❌ Failed to start CLI application:', error);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Start the application
main().catch(error => {
  console.error('❌ Application startup failed:', error);
  process.exit(1);
});
