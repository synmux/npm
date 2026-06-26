---
name: update-notifier-skilld
description: "ALWAYS use when writing code importing \"update-notifier\". Consult for debugging, best practices, or modifying update-notifier, update notifier."
metadata:
  version: 7.3.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# yeoman/update-notifier `update-notifier@7.3.1`
**Tags:** latest: 7.3.1

**References:** [package.json](./.skilld/pkg/package.json) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p update-notifier` instead of grepping `.skilld/` directories. Run `skilld search --guide -p update-notifier` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes for update-notifier v7.3.1 — prioritizing recent major/minor releases.

- BREAKING: `notify()` message output — v7.0.0 removed Yarn install command suggestions, only npm install commands are shown [source](./.skilld/releases/v7.0.0.md#breaking)

- BREAKING: ESM-only module — v6.0.0 and continuing in v7, the package is pure ESM with no CommonJS support; `require('update-notifier')` will fail [source](./.skilld/releases/v6.0.0.md#breaking)

- BREAKING: Node.js 18 minimum — v7.0.0 requires Node.js 18 or higher (v6 supported Node.js 14+) [source](./.skilld/releases/v7.0.0.md#breaking)

- DEPRECATED: `packageName` and `packageVersion` options — use `pkg.name` and `pkg.version` in the options object instead; old options still work but are deprecated [source](./.skilld/pkg/index.js:L1)

**Also changed:** `updateCheckInterval` default 1 day · `distTag` default `'latest'` · `shouldNotifyInNpmScript` default false
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Always pass both `pkg.name` and `pkg.version` — these are required and the library will throw an error if either is missing [source](./.skilld/pkg/update-notifier.js:L49-50)

- Check `process.stdout.isTTY` before displaying notifications — prevents cluttering output in non-interactive environments like CI, logs, or piped commands [source](./.skilld/pkg/update-notifier.js:L130)

- Use check intervals to avoid overwhelming the npm registry — defaults to 1 day, but honour the interval by checking the last update check timestamp before spawning a background process [source](./.skilld/pkg/update-notifier.js:L105-107)

- Spawn background checks as detached, unref'd child processes — uses `spawn(process.execPath, [...], {detached: true, stdio: 'ignore'}).unref()` to prevent blocking the parent CLI process and allowing it to exit [source](./.skilld/pkg/update-notifier.js:L110-113)

- Cache update information across CLI invocations — fetch results are persisted to disk via ConfigStore so the second run displays cached updates without re-checking npm [source](./.skilld/pkg/update-notifier.js:L94-102)

- Initialize `lastUpdateCheck` with the current time on first run — prevents checking for updates immediately on first invocation, giving users a grace period before notifications appear [source](./.skilld/pkg/update-notifier.js:L66-68)

- Support multiple opt-out mechanisms for end users — check the `NO_UPDATE_NOTIFIER` environment variable, `--no-update-notifier` CLI flag, test environment (`NODE_ENV=test`), and CI detection automatically [source](./.skilld/pkg/update-notifier.js:L56-59)

- Handle ConfigStore permission errors with helpful user guidance — catch EACCES/EPERM errors and display a formatted message suggesting `sudo chown` to fix permissions [source](./.skilld/pkg/update-notifier.js:L63-81)

- Import only required functions from semver for optimal startup performance — use `import semverDiff from 'semver/functions/diff.js'` rather than importing the full semver module [source](./.skilld/pkg/update-notifier.js:L9-10)

- Defer notification display to process exit by default — set `options.defer = true` to avoid interrupting CLI output; use `defer: false` only when you control the output stream [source](./.skilld/pkg/update-notifier.js:L167-173)

- Use `distTag` to support non-latest versions — allows users to track alternative npm dist-tags like `@canary`, `@next`, or `@beta` instead of only `latest` [source](./.skilld/pkg/update-notifier.js:L117-123)

- Provide sensible defaults for `boxenOptions` in notifications — defaults include `{padding: 1, margin: 1, textAlignment: 'center', borderColor: 'yellow', borderStyle: 'round'}` which create readable, visually consistent notifications [source](./.skilld/pkg/update-notifier.js:L149-155)

- Use template placeholders for customizable messages — support custom notification text via `options.message` with substitution for `{packageName}`, `{currentVersion}`, `{latestVersion}`, and `{updateCommand}` [source](./.skilld/pkg/update-notifier.js:L157-165)

- Set `shouldNotifyInNpmScript: true` only when appropriate — by default notifications are suppressed when running as an npm script to avoid noisy output during `npm run` workflows [source](./.skilld/pkg/update-notifier.js:L129)
<!-- /skilld:best-practices -->

Related: chalk-skilld
