---
name: types-node-skilld
description: "ALWAYS use when writing code importing \"@types/node\". Consult for debugging, best practices, or modifying @types/node, types/node, types node, DefinitelyTyped."
metadata:
  version: 26.0.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# DefinitelyTyped/DefinitelyTyped `@types/node@26.0.1`
**Tags:** ts2.5: 12.12.6, ts2.6: 12.12.6, ts2.0: 12.12.6

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @types/node` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @types/node` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes in @types/node v26.0.1 — focusing on breaking changes and new features that differ from v25.x.

- BREAKING: TypeScript 5.8+ is now required. v26.0.1 dropped support for TypeScript 5.6 and earlier. If your project uses TypeScript 5.7 or older, you cannot upgrade to @types/node v26.x without upgrading TypeScript first. [source](./.skilld/pkg/index.d.ts:L25)

- BREAKING: New TypeScript features are now used in type definitions. The type library now references `esnext.disposable` and `esnext.float16` which are only available in TypeScript 5.8+. Code using `using` declarations (from `esnext.disposable`) or Float16Array requires TypeScript 5.8+. [source](./.skilld/pkg/index.d.ts:L28-30)

**Also changed:** Separate type definitions for older TypeScript versions removed · TypeScript 5.7 compatibility layer maintained but v5.6 support dropped
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## @types/node Best Practices

## Overview

@types/node provides TypeScript definitions for Node.js APIs. These best practices focus on configuration, API usage patterns, and type inference strategies that improve safety and developer experience.

## Best Practices

- Configure `"lib": ["ESNext"]` in tsconfig.json to access modern ES APIs like `Array.fromAsync()` — these are defined in TypeScript's standard library, not @types/node, and require explicit lib configuration [source](./.skilld/discussions/discussion-74504.md)

- Use TypeScript lib options `es2025.iterator` (TS 6.0+) or `esnext.iterator` (TS 5.6–5.9) to enable async iterator helpers (`filter()`, `map()`) on objects in Node.js v22+ — @types/node does not provide ES builtin definitions; those come from TypeScript itself [source](./.skilld/discussions/discussion-74956.md)

- Call `stream.finished()` with `cleanup: true` option when you need guaranteed listener removal — this prevents dangling event listeners (`error`, `end`, `finish`, `close`) that can cause unexpected crashes if the stream emits errors after resolution [source](./.skilld/pkg/stream/promises.d.ts:L30-L42)

- Enable `captureRejections: true` when constructing an `EventEmitter` if you need automatic promise rejection handling — handlers are called via the `Symbol.for('nodejs.rejection')` method, allowing centralized error management without try/catch in event listeners [source](./.skilld/pkg/events.d.ts:L45-L65)

- Use encoding option overloads with `exec()` and `execSync()` — pass `encoding: 'utf-8'` or omit it for string output, or use `encoding: 'buffer'` for Buffer output; TypeScript will infer the correct stdout/stderr type based on this option, preventing runtime type surprises [source](./.skilld/pkg/child_process.d.ts:L135-L165)

- Extract missing fetch init types with `ConstructorParameters<typeof Headers>[0]` when @types/node lacks definitions like `HeadersInit` — this provides portability across Node, Deno, and browser environments while working around incomplete type definitions [source](./.skilld/discussions/discussion-74411.md:L23-L24)

- Use `ProcessEventMap` or typed signal event handlers for type-safe signal handling — this prevents typos in signal names like `'SIGTERM'` and ensures correct listener parameter types [source](./.skilld/pkg/process.d.ts:L80-L95)

- Check TypeScript's lib.d.ts before assuming an API needs @types/node — newer Node.js features often land in TypeScript's type stubs first (e.g., `Intl.Locale.weekInfo`) and @types/node may lag [source](./.skilld/discussions/discussion-74497.md)

- Import `randomUUID()` from the `node:crypto` module, not Web Crypto APIs — while similar APIs exist in `crypto.webcrypto`, Node's crypto module provides a synchronous UUID generator since v15.6.0 [source](./.skilld/pkg/crypto.d.ts:L420-L428)

- Pass `AbortSignal` to delay functions like `setImmediate()` and `setTimeout()` from `node:timers/promises` for cancellable operations — create an `AbortController`, pass its signal in options, and abort it to reject the promise immediately [source](./.skilld/pkg/timers/promises.d.ts:L1-L85)

- Use async generators in stream pipelines via `node:stream/promises` — `pipeline()` accepts async generator functions as transforms, enabling cleaner control flow than manual transform streams [source](./.skilld/pkg/stream/promises.d.ts:L50-L90)

- Prefer `util.types.*()` type guards for runtime type checking — functions like `isArrayBuffer()`, `isArrayBufferView()`, and `isBigInt64Array()` use TypeScript type predicates that narrow types automatically without additional casts [source](./.skilld/pkg/util/types.d.ts:L20-L80)

- Match `chunkSize` between file reader and writer options when using `fs.promises` — set reader and writer to the same chunkSize (default 131072) for optimal `pipeTo()` performance and reduced memory thrashing [source](./.skilld/pkg/fs/promises.d.ts:L110-L145)
<!-- /skilld:best-practices -->
