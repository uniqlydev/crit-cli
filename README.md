# Crit CLI

A powerful CLI tool for managing workflows and code analysis with SARIF output support. Crit CLI enables you to define custom workflows and rules for your projects, making it easy to run automated checks and generate standardized reports.

## Features

- 🚀 **Workflow Management**: Define and execute custom workflows using YAML configuration
- 📊 **SARIF Output**: Generate standardized Static Analysis Results Interchange Format reports
- 🔧 **Flexible Rules Engine**: Create custom rules for code analysis
- 🎯 **Git Integration**: Run checks on changed files or all project files
- 📁 **Project Scaffolding**: Initialize new projects with default configurations

## Installation

### NPM
```bash
npm install -g @crit/cli
```

### From Source
```bash
git clone https://github.com/uniqlydev/crit-cli.git
cd crit-cli
npm install
npm run build
npm link
```

## Quick Start

1. **Initialize a new project**:
   ```bash
   crit init
   ```

2. **List available workflows**:
   ```bash
   crit execute
   ```

3. **Execute a workflow**:
   ```bash
   crit execute default
   ```

4. **Run checks on your project**:
   ```bash
   crit run --all --format sarif
   ```

## Commands

### `crit init`
Initialize a new Crit project in the current directory. This creates:
- `.crit/workflows/` directory with default workflow
- `.crit/rules/` directory with default rules

```bash
crit init
```

### `crit add <type>`
Add a new component to your Crit project.

```bash
crit add rule      # Add a new rule
crit add workflow  # Add a new workflow
```

### `crit run [options]`
Run code analysis checks on your project.

**Options:**
- `--all` - Run on all files in the project
- `--changed` - Run only on changed files (git diff)
- `--workflow <path>` - Specify workflow file (default: `crit/workflows/pr.yaml`)
- `--format <format>` - Output format: `table` or `sarif` (default: `table`)

**Examples:**
```bash
# Run on all files with table output
crit run --all

# Run on changed files with SARIF output
crit run --changed --format sarif

# Run with custom workflow
crit run --workflow .crit/workflows/custom.yaml --format sarif
```

### `crit execute [workflow]`
Execute a specific workflow from `.crit/workflows/` directory.

```bash
# List available workflows
crit execute

# Execute specific workflow
crit execute default
crit execute lint-workflow
```

## Configuration

### Workflow Configuration
Create YAML files in `.crit/workflows/` to define your workflows:

```yaml
# .crit/workflows/example.yaml
name: Example Workflow
version: 1
steps:
  - npm run lint
  - npm test
  - npm run build
```

### Rules Configuration
Define custom rules in `.crit/rules/` directory:

```yaml
# .crit/rules/example.yaml
name: Example Rules
version: 1
rules:
  - id: no-console
    severity: medium
    message: "Avoid using console statements in production"
```

## Output Formats

### Table Format
Human-readable table output for terminal consumption.

### SARIF Format
Standardized JSON format following the [SARIF specification](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html) for integration with:
- GitHub Security tab
- Azure DevOps
- VS Code extensions
- Other SARIF-compatible tools

## Development

### Prerequisites
- Node.js 18+ 
- TypeScript 5+

### Building
```bash
npm install
npm run build
```

### Development Mode
```bash
npm run dev  # Watch mode compilation
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Code of Conduct
Participation in this project is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By contributing, you agree to uphold this standard. For any concerns, email: brencastillo@proton.me.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Support

- 🐛 [Report Issues](https://github.com/uniqlydev/crit-cli/issues)
- 💬 [Discussions](https://github.com/uniqlydev/crit-cli/discussions)
- 📖 [Documentation](https://github.com/uniqlydev/crit-cli#readme)