---
name: ora-skilld
description: "ALWAYS use when writing code importing \"ora\". Consult for debugging, best practices, or modifying ora."
metadata:
  version: 9.4.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# sindresorhus/ora `ora@9.4.1`
**Tags:** latest: 9.4.1

**References:** [package.json](./.skilld/pkg/package.json) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p ora` instead of grepping `.skilld/` directories. Run `skilld search --guide -p ora` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- BREAKING: Node.js 20 required in v9.0.0 — no longer supports Node.js 16 or 18; v8.0.0 required Node.js 18, v7.0.0 required Node.js 16. Update your runtime environment before upgrading. [source](./.skilld/releases/v9.0.0.md#breaking)

- NEW: `color` option accepts `boolean` in v8.2.0 — set `color: false` to disable all ANSI color codes without providing a color name string (previously only string values like `'cyan'` were accepted). [source](./.skilld/releases/v8.2.0.md)

- IMPROVED: `frame()` method in v9.0.0 now correctly invokes dynamic `prefixText` and `suffixText` when provided as functions — prior versions would not call the function, causing function-based text to render incorrectly. [source](./.skilld/releases/v9.0.0.md:L16)

- NEW: External writes to stream during spinning in v9.1.0 — `console.log()` and `console.error()` now work seamlessly while the spinner is active; ora automatically clears itself, outputs the message, and re-renders below without requiring special handling. [source](./.skilld/releases/v9.1.0.md)

- IMPROVED: Rendering flicker reduced in v9.3.0 — high-frequency text updates now appear smoother due to optimizations in the frame rendering logic. [source](./.skilld/releases/v9.3.0.md)

- STABLE: `prefixText` and `suffixText` options accept function generators — both accept `string | (() => string)` to dynamically compute text on each render, enabling use cases like elapsed time counters or dynamic status updates. [source](./.skilld/pkg/README.md:L49:59)

- STABLE: `spinners` named export provides access to all registered spinner definitions — import via `import {spinners} from 'ora'` to reference, customize, or extend individual spinner configurations. [source](./.skilld/pkg/README.md#spinners)

- STABLE: `oraPromise()` named export (renamed from `ora.promise` in v6.0.0) — accepts a promise or promise-returning function and returns the promise directly, enabling direct awaiting and cleaner integration with async/await patterns. [source](./.skilld/pkg/README.md:L265:274)

- STABLE: `discardStdin` option controls terminal input handling — defaults to `true` to prevent spinner twitching on user input; set to `false` to allow stdin passthrough (note: this affects Ctrl+C handling in synchronous-heavy code). [source](./.skilld/pkg/README.md:L132:141)

**Also changed:** `interval` getter for spinner instance · `stopAndPersist()` method with custom symbol support · `.clear()` method performance improved in v6.1.0 · Symbol handling fixed in `stopAndPersist()` for v8.1.1
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices for ora v9.4.1

## Best Practices

- Always use a single spinner instance at a time — ore is designed for one spinner per context. Creating multiple concurrent spinners will cause display conflicts; use alternatives like listr2 or spinnies for multi-task progress tracking [source](./.skilld/issues/issue-116.md)

- Log output automatically pauses and resumes the spinner as of v9.1.0 — console.log/error/warn calls while spinning are now handled seamlessly without manual `.clear()` and `.render()` workarounds [source](./.skilld/releases/v9.1.0.md)

- Use dynamic prefix/suffix text with generator functions for real-time status updates — pass a `() => string` function to `prefixText` or `suffixText` to compute display text on each frame render, avoiding manual text updates [source](./.skilld/releases/v9.0.0.md), [type definition](./.skilld/pkg/index.d.ts:L19-L21)

- Use `oraPromise()` with callback functions for `successText` and `failText` — pass `(result: T) => string` to compute the final message based on the promise result, enabling dynamic success messages without manual text manipulation [source](./.skilld/pkg/index.d.ts:L159-L166)

- Prefer `isEnabled: false` over `isSilent: true` for conditional spinners — `isEnabled` still logs text without spinner animation (graceful degradation), while `isSilent` suppresses all output; use `isEnabled` for CI/non-TTY environments [source](./.skilld/pkg/index.d.ts:L97-L109)

- Stream output to `process.stdout` instead of default `process.stderr` only when spinner output must appear before piped command input — the default stderr avoids interleaving with stdout log streams; override only for specific architectural needs [source](./.skilld/pkg/readme.md:L107-L115)

- Disable `discardStdin` only if your code is fully asynchronous and handles Ctrl+C via signal handlers — `discardStdin: true` (default) prevents input buffering and twitching, but blocks synchronous Ctrl+C delivery; set `discardStdin: false` and ensure no blocking operations on the event loop [source](./.skilld/pkg/index.d.ts:L112-L120)

- Chain spinner state changes with method returns for fluent API — all spinner methods (`.text =`, `.succeed()`, `.fail()`, etc.) return `this`, allowing compact `spinner.text = 'Working...'; spinner.color = 'yellow'` chains [source](./.skilld/pkg/index.d.ts:L272-L339)

- Use `stopAndPersist(options)` with custom symbols for persistent status markers — this preserves the spinner line with a replacement symbol (e.g., custom emoji or status indicator) instead of the transient spinner animation [source](./.skilld/pkg/readme.md:L215-L251)

- Set `interval` explicitly only when default spinner timing causes perceived flicker — v9.3.0 reduced default flicker, so custom intervals are rarely needed; spinners provide their own recommended interval [source](./.skilld/releases/v9.3.0.md), [API docs](./.skilld/pkg/readme.md:L99-L106)

- Use `frame()` method to integrate spinner output with custom logging libraries — call `.frame()` to get the rendered spinner string for use with log-update or similar libraries instead of writing alternative integration code [source](./.skilld/pkg/readme.md:L371-L373)

- Avoid multiple spinners in Worker threads — ora requires an interactive TTY environment and worker threads are not considered interactive; run the spinner in the main thread and control it via `postMessage()` [source](./.skilld/pkg/readme.md:L375-L400)

- Test spinner behavior under TTY and non-TTY conditions separately — use `isEnabled` to force enable/disable and verify spinner gracefully degrades when piped or in CI; default detection may vary by environment [source](./.skilld/pkg/readme.md:L340-L347)

- Use `.succeed()`, `.fail()`, `.warn()`, `.info()` for semantic endpoint states instead of manual symbol replacement — these methods apply the correct symbol and color for each outcome, improving clarity and maintainability [source](./.skilld/pkg/index.d.ts:L280-L311)
<!-- /skilld:best-practices -->

Related: chalk-skilld
