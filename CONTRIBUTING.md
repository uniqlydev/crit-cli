# Contributing to Crit CLI

We love your input! We want to make contributing to Crit CLI as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Getting Started

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/your-username/crit-cli.git
   cd crit-cli
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Link for local development**:
   ```bash
   npm link
   ```

5. **Start development mode** (optional):
   ```bash
   npm run dev  # Watches for changes and rebuilds
   ```

### Project Structure

```
crit-cli/
├── src/
│   ├── cli.ts           # Main CLI entry point
│   ├── commands/        # CLI command implementations
│   ├── core/           # Core logic (engine, config, workflow)
│   └── utils/          # Utility functions
├── default/            # Default configuration files
├── dist/              # Compiled output
└── tests/             # Test files (when added)
```

### Coding Standards

- **TypeScript**: We use TypeScript for type safety
- **ESM**: The project uses ES modules
- **Formatting**: Code should be readable and well-commented
- **Error Handling**: Proper error handling with meaningful messages

### Code Style

- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Follow TypeScript best practices
- Use async/await instead of Promise chains
- Handle errors gracefully

### Example Code Style

```typescript
/**
 * Loads a workflow configuration from a YAML file
 * @param path - Path to the workflow file
 * @returns Promise resolving to the workflow configuration
 * @throws Error if the file cannot be loaded or parsed
 */
export async function loadWorkflow(path: string): Promise<Workflow> {
    try {
        const fileContent = await readFile(path, 'utf-8');
        const parsed = load(fileContent) as Workflow;
        
        // Validate required fields
        if (!parsed.name || !parsed.version || !Array.isArray(parsed.steps)) {
            throw new Error('Invalid workflow format. Required fields: name, version, steps');
        }
        
        return parsed;
    } catch (error: any) {
        throw new Error(`Failed to load workflow from ${path}: ${error.message}`);
    }
}
```

## Testing

Currently, the project doesn't have a comprehensive test suite. Contributing tests would be greatly appreciated!

### Adding Tests

When adding tests:
- Place test files in a `tests/` or `__tests__/` directory
- Use descriptive test names
- Test both success and error cases
- Mock external dependencies when necessary

## Reporting Issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/uniqlydev/crit-cli/issues).

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Feature Requests

We welcome feature requests! Please:

1. Check existing issues to avoid duplicates
2. Provide a clear description of the problem you're trying to solve
3. Explain why this feature would be useful to other users
4. Include examples of how the feature would work

## Submitting Changes

### Commit Messages

Write clear, concise commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable
2. Update the version numbers in package.json following [SemVer](http://semver.org/)
3. The PR will be merged once you have the sign-off of at least one maintainer

### Branch Naming

Use descriptive branch names:
- `feature/add-new-command` for new features
- `fix/resolve-workflow-parsing` for bug fixes
- `docs/update-contributing-guide` for documentation updates

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

## Questions?

Feel free to [open an issue](https://github.com/uniqlydev/crit-cli/issues) with the label "question" if you have any questions about contributing!

## Recognition

Contributors will be recognized in our README and release notes. Thank you for helping make Crit CLI better! 🎉