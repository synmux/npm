# Project Scan Summary

For detail, see [DETAILS.txt](DETAILS.txt).

## Top Issues

1. **CI/CD workflows lack timeouts and concurrency control** — This pattern repeats across nearly every workflow file. `ci.yml`, `docker.yaml`, `claude.yml`, and `devskim.yaml` all have jobs with no `timeout-minutes` and no `concurrency` group, so hung steps consume runners indefinitely and overlapping triggers (push + PR, repeated tag pushes, multiple `@claude` comments) launch redundant parallel runs.

2. **OAuth token exposure via publicly-triggerable workflow** — `.github/workflows/claude.yml` can be triggered by any external user commenting `@claude` on a public repo, yet consumes `CLAUDE_CODE_OAUTH_TOKEN` and runs an agent that can execute tools. This is a serious supply-chain/credential risk.

3. **Workflow permissions are broader than least privilege** — `.github/workflows/devskim.yaml` grants `id-token: write`, `issues: write`, `pull-requests: write` for a job that only checks out code and uploads SARIF; `.github/workflows/publish.yml` uses `permissions: read-all`. Both should be narrowed to `contents: read` + `security-events: write` (where needed).

4. **Publish workflow will fail on a fresh runner** — `.github/workflows/publish.yml` runs `npm publish` without installing dependencies, yet `prepublishOnly` runs `pnpm run lint lint:types test build` which needs `node_modules` that were never set up.

5. **Docker `latest` tag clobbering** — `.github/workflows/docker.yaml` triggers on every tag push (`tags: "*"`), so arbitrary/test tags overwrite the mutable `latest` tag with non-production images.

6. **Type declarations are incomplete and occasionally inaccurate** — `src/types/chalk.d.ts` (duplicate `ChalkFunction`, missing `bg*`/`hex()`/`rgb()`, missing named exports), `src/types/cli-table3.d.ts` (rejects valid object-cell usage, overly permissive index signatures that defeat compile-time checks), and `src/types/chalk-animation.d.ts` (declares `stop(): void` when v2 returns a Promise; missing `frame()`). These will let invalid code compile and reject valid library usage.

7. **Spinner leak and module-level side effects in `src/index.ts`** — The exported async function has no `try/catch`/`finally`, so the ora spinner keeps spinning if anything throws. Additionally, `updateNotifier({ pkg })` runs at import time, spawning a background network call on every module load — this complicates testing and adds an implicit runtime dependency.

8. **`Dockerfile` broken build due to `--ignore-scripts`** — Both build and prod-deps stages use `pnpm install --ignore-scripts`, but the build stage immediately runs `pnpm run build` which relies on esbuild and `@biomejs/biome` native binaries set up via postinstall hooks. The build will fail or produce broken artifacts.

9. **Tooling reproducibility gaps** — `package.json` "gif" script depends on undocumented external binaries (`vhs`, `gif2webp`); `mise.toml` hard-codes Node `24.20.0` (a patch release that may disappear); `.trunk/trunk.yaml` pins Python `3.14.4` (very new, potentially incompatible with pinned linters); `package.json` `prepare` script swallows failures with `|| true`.

10. **`Dockerfile` healthcheck is meaningless** — The healthcheck runs the same stateless CLI as CMD, which prints an ANSI profile and exits 0; it will always report "healthy" regardless of actual container state.

## Module Hotspots

- **`src/types/`** — 10 comments across 3 files (`chalk.d.ts`, `cli-table3.d.ts`, `chalk-animation.d.ts`). Highest comment density per line in the repo; all involve type-surface accuracy issues.
- **`.github/workflows/`** — ~19 comments across 5 files (`ci.yml`, `docker.yaml`, `devskim.yaml`, `claude.yml`, `publish.yml`). Dominated by missing timeouts/concurrency, overly broad permissions, and a broken publish pipeline.
- **`Dockerfile` + `.dockerignore`** — 5 comments covering build-stage breakage, missing credential exclusions, and depth-matching inconsistencies.
- **Root `.gitignore` + `.trunk/.gitignore`** — 6 comments on overly broad/ambiguous ignore patterns that could mask real files.

## Cross-Cutting Concerns

- **Missing timeout/concurrency discipline everywhere** — `ci.yml` (lint job), `docker.yaml` (push job), `devskim.yaml`, `claude.yml` all lack `timeout-minutes`; none define `concurrency` groups. This is a systematic omission, not a one-off.

- **Ignore-file pattern breadth** — Root `.gitignore` (`**/*.log`, unanchored `*-skilld`), `.trunk/.gitignore` (`*out` matches `layout`/`about`, bare `tmp`), and `.dockerignore` (depth-sensitive patterns like `*.md` not matching `docs/README.md`) all over- or under-match due to lack of anchoring/path-prefix discipline.

- **Incomplete/stubbed type declarations treated as canonical** — The three `.d.ts` files in `src/types/` each only cover a subset of the real library API while adding redundant or over-permissive constructs. This suggests a pattern of hand-written stubs that will rot as underlying deps evolve.

- **Reproducibility vs. freshness tension in tooling pins** — `mise.toml` pins an exact patch Node, `.trunk/trunk.yaml` pins a bleeding-edge Python; `package.json` references external binaries without declaring them. The repo aims for reproducibility but the pins are either too brittle or too new.

- **CI security posture is inconsistent** — `devskim.yaml` and `publish.yml` have overly broad permissions, while `claude.yml` has a dangerously open trigger. No workflow follows least-privilege consistently.

## Quick Wins

- Add `timeout-minutes` (15–30) and a `concurrency` group with `cancel-in-progress: true` to all four workflows in `.github/workflows/`.
- Narrow `devskim.yaml` permissions to `contents: read` + `security-events: write`; narrow `publish.yml` to least privilege.
- Fix the `.editorconfig` glob — `[{*.go,Makefile}]` is a character class, not a pattern list.
- Remove the dead `export default {}` from `src/cmd.ts`.
- Add a `try/catch/finally` in `src/index.ts` to guarantee `spinner.stop()` runs on all code paths.
- Fix the `.dockerignore` depth patterns (`*.md` → `**/*.md`) and add `.npmrc`/`.pypirc`/`.envrc` to credential exclusions.
- Fix the `stop()` return type in `src/types/chalk-animation.d.ts` to `Promise<void>` and unify the duplicate `ChalkFunction` alias in `src/types/chalk.d.ts`.
- Install dependencies explicitly in `publish.yml` before `npm publish`, or ensure `prepublishOnly` can run with the setup that exists.
