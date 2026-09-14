# Agent Guide for @synmux/npm

This repository contains the source code for the `@synmux/npm` npm package, a CLI-based "business card" for syn.

## ⚡️ Quick Start

This project runs on **Node 24** and uses **pnpm** for package management and script execution. `mise.toml` pins Node
and the `packageManager` field in `package.json` pins pnpm (Corepack honours it).

```bash
# Install dependencies
pnpm install

# Run the CLI locally (Node strips the types natively; nothing is compiled)
pnpm start

# Run tests
pnpm test
```

## 🛠 Project Structure

- **Runtime**: Node 24 (`mise.toml`, `engines.node`)
- **Package manager**: pnpm (`pnpm-lock.yaml`, `pnpm-workspace.yaml` for install policy)
- **Language**: TypeScript, type-checked by `tsc` (`tsconfig.json`), never emitted for development
- **Linter/Formatter**: Biome (`biome.json`)
- **Bundler**: esbuild, with a declaration-only `tsc -p tsconfig.build.json` pass for `dist/index.d.ts`
- **Test runner**: vitest (`vitest.config.ts`)
- **Entry Points**:
  - `src/index.ts`: Core logic (exports default async function).
  - `src/cmd.ts`: CLI executable wrapper (calls `index.ts`).
- **Tests**: `src/index.test.ts`.
- **Types**: `src/types/` contains declarations for untyped dependencies.
- **Build output**: `dist/` (gitignored; `cmd.js`, `index.js`, a shared chunk and `index.d.ts`)

## 🤖 Common Commands

| Command               | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `pnpm start`          | Run the CLI tool locally from source                           |
| `pnpm run build`      | Bundle with esbuild and emit declarations (outputs to `dist/`) |
| `pnpm test`           | Run unit tests once                                            |
| `pnpm run test:watch` | Run unit tests in watch mode                                   |
| `pnpm run lint`       | Check code style with Biome                                    |
| `pnpm run lint:fix`   | Auto-fix code style issues                                     |
| `pnpm run lint:types` | Type-check with `tsc --noEmit`                                 |
| `pnpm run docker`     | Build and run the Docker container                             |
| `pnpm run gif`        | Record terminal demo (requires `vhs` and `gif2webp`)           |

CI (`.github/workflows/ci.yml`) runs Trunk, then `lint`, `lint:types`, `build` and `test`. `publish.yml` re-runs CI
against a version tag and publishes with npm trusted publishing (OIDC); `prepublishOnly` runs the same gate locally.

## 🏗 Architecture & Patterns

### CLI Output

- **Styling**: Uses `chalk` for colors and `gradient-string` for gradients.
- **Animation**: Uses `chalk-animation` and `ora` spinners.
- **Layout**: Uses `cli-table3` for the links table.
- **Hyperlinks**: Uses OSC-8 escape sequences via a helper function to make links clickable.

### Code Style

- **Formatting**: Strict adherence to Biome rules.
- **Imports**: ES Modules (`import`/`export`). Relative imports keep their `.ts` extension so Node can run the sources
  directly.
- **Async/Await**: Used heavily for animations (e.g., `sleep` helper).
- **Type Safety**: TypeScript used throughout. `src/types/` covers missing `@types/*` packages.

## 🧪 Testing

- **Runner**: vitest, configured in `vitest.config.ts` with a 15 second timeout because the CLI animates for four
  seconds before printing.
- **Mocking**: `vi.spyOn(console, 'log')` is used to capture and verify CLI output; mocks are restored after each
  test.
- **Pattern**: Tests run against the exported function from `src/index.ts`, not the CLI wrapper.

## ⚠️ Gotchas & Notes

1. **Node type stripping**: `pnpm start` runs `node src/cmd.ts`. Only erasable TypeScript syntax is allowed
   (`erasableSyntaxOnly` in `tsconfig.json`), and relative imports must include the `.ts` extension.
2. **Bundling**: esbuild marks packages external (`dependencies` are installed by npm) and inlines `package.json`. The
   two entry points share a chunk via `--splitting`.
3. **Type Definitions**: Some dependencies (`chalk-animation`, `update-notifier`) lack official types. Check `src/types/`
   before adding `@ts-expect-error`.
4. **Animations**: The code uses `process.stdout.write` with ANSI escape codes to overwrite lines for animations.
5. **pnpm install policy**: `pnpm-workspace.yaml` enforces a one-week `minimumReleaseAge`, so `pnpm add` can pick a
   version behind npm's latest. `allowBuilds` lists the packages whose install scripts may run.
6. **Docker**: The multi-stage `Dockerfile` installs pnpm via Corepack, builds in one stage and ships only `dist/` plus
   production dependencies.

<!-- skilld -->
Before modifying code, evaluate each installed skill against the current task.
For each skill, determine YES/NO relevance and invoke all YES skills before proceeding.
<!-- /skilld -->
