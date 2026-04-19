# Contributing

## 📑 Table of Contents

- 🚀 [Prerequisites](#prerequisites)
- 🏁 [Getting Started](#getting-started)
- 🛠️ [Available Scripts](#available-scripts)
- 🤝 [Requirements](#requirements)
- 🏗️ [Built With](#built-with)
- 🔄 [CI/CD](#cicd)
- 🏷️ [Versioning](#versioning)

<h2 id="prerequisites">🚀 Prerequisites</h2>

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v22+)
- [pnpm](https://pnpm.io/) (v10+)

> **Recommendation**: use [fnm](https://github.com/Schniz/fnm) (Fast Node Manager) for easier Node.js version management.

<h2 id="getting-started">🏁 Getting Started</h2>

1. **Clone the repository**

```bash
git clone git@github.com:arckit-dev/effect.git
cd effect
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run tests**

```bash
pnpm test
```

<h2 id="available-scripts">🛠️ Available Scripts</h2>

### Development

| Command | Description |
|---------|-------------|
| `pnpm build` | Build the library with [tsup](https://tsup.egoist.dev/) (ESM + CJS + declarations). |
| `pnpm dev` | Build in watch mode. |

### Testing

| Command | Description |
|---------|-------------|
| `pnpm test` | Run [Vitest](https://vitest.dev/) unit tests. |
| `pnpm test:watch` | Run tests in watch mode. |
| `pnpm test:coverage` | Run tests with [v8 coverage](https://vitest.dev/guide/coverage) report. |

### Code Quality

| Command | Description |
|---------|-------------|
| `pnpm lint:code` | Lint and format code with [Biome](https://biomejs.dev/). |
| `pnpm lint:code:ci` | Check code with Biome (CI mode, no auto-fix). |
| `pnpm lint:commit` | Validate commit messages against [Conventional Commits](https://www.conventionalcommits.org/) using [commitlint](https://commitlint.js.org/). |
| `pnpm lint:unused` | Detect unused dependencies and exports with [knip](https://knip.dev/). |
| `pnpm typecheck` | Type-check with TypeScript (no emit). |

### Package Quality

| Command | Description |
|---------|-------------|
| `pnpm check:publint` | Validate package.json and exports with [publint](https://publint.dev/). |
| `pnpm check:attw` | Verify types resolution across module systems with [@arethetypeswrong](https://arethetypeswrong.github.io/). |
| `pnpm check:size` | Check bundle size with [size-limit](https://github.com/ai/size-limit). |

<h2 id="requirements">🤝 Requirements</h2>

### Branches

- Keep your branch **up-to-date** with `main` using rebase
- Use conventional branch prefixes: `feat/`, `fix/`, `chore/`, `ci/`, `docs/`, `refactor/`, `test/`, `build/`, `perf/`, `revert/`, `style/`

### Commits

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
- Commits must be GPG-signed

### Feature Branch Workflow

1. Create a branch from `main` with a conventional prefix
2. Make your changes and commit
3. Push your branch — CI runs automatically
4. Open a Pull Request to merge into `main`

<h2 id="built-with">🏗️ Built With</h2>

### Languages

- [TypeScript](https://www.typescriptlang.org/): statically typed superset of JavaScript
- [Effect](https://effect.website/): type-safe functional programming library

### Tools

- [tsup](https://tsup.egoist.dev/): fast library bundler powered by esbuild
- [Vitest](https://vitest.dev/): unit test framework
- [Biome](https://biomejs.dev/): fast linter and formatter
- [Husky](https://typicode.github.io/husky/): git hooks for automatic checks
- [Commitlint](https://github.com/conventional-changelog/commitlint): conventional commits validation
- [Lint-staged](https://github.com/okonet/lint-staged): linters on staged git files

<h2 id="cicd">🔄 CI/CD</h2>

### Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| [Feature branch](.github/workflows/feature-branch.yml) | Push to feature branch / PR | Lint, type-check, test, build, package quality checks |
| [Release](.github/workflows/release.yml) | Push to `main` | Build and publish to npm via [semantic-release](https://semantic-release.gitbook.io/) |

<h2 id="versioning">🏷️ Versioning</h2>

This project follows [Semantic Versioning 2.0.0](https://semver.org/) specification for version naming, ensuring a clear release cycle and promoting backward compatibility.
