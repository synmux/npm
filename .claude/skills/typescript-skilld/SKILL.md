---
name: typescript-skilld
description: "ALWAYS use when editing or working with *.ts, *.tsx, *.mts, *.cts files or code importing \"typescript\". Consult for debugging, best practices, or modifying typescript, TypeScript."
metadata:
  version: 6.0.3
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# microsoft/TypeScript `typescript@6.0.3`
**Tags:** dev: 3.9.4, tag-for-publishing-older-releases: 4.1.6, insiders: 4.6.2-insiders.20220225

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p typescript` instead of grepping `.skilld/` directories. Run `skilld search --guide -p typescript` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

### Breaking Changes (v5.9 → v6.0)

- BREAKING: `import ... asserts` — replaced by `import ... with` for import attributes in v6.0. Code using `asserts` syntax now errors [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L745:L771)

- BREAKING: `--module amd`, `umd`, `systemjs`, `none` — removed in v6.0, only `esnext`, `commonjs`, `nodenext`, `bundler`, and `preserve` supported [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L593:L606)

- BREAKING: `--outFile` — removed in v6.0, must use external bundler instead [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L700:L702)

- BREAKING: `module Foo { }` namespace syntax — v6.0 errors on legacy module syntax, must use `namespace Foo { }` instead [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L704:L743)

- BREAKING: `/// <reference no-default-lib="true"/>` directive — removed in v6.0, use `--noLib` or `--libReplacement` instead [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L773:L777)

### Compiler Option Changes (Defaults)

- BREAKING: `types` defaults to `[]` in v6.0 (was wildcard enumeration of `node_modules/@types` in v5.9) — must explicitly set `"types": ["node", "jest"]` or similar [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L526:L567)

- BREAKING: `rootDir` defaults to `.` in v6.0 (was inferred from source files in v5.9) — may need explicit `"rootDir": "./src"` if files are nested [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L496:L524)

- BREAKING: `strict` now defaults to `true` in v6.0 (was `false` in v5.9) — older projects must set `"strict": false` to preserve v5.9 behavior [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L488)

- BREAKING: `module` defaults to `esnext` in v6.0 (was `commonjs` in v5.9) — projects targeting CommonJS must set `"module": "commonjs"` explicitly [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L489)

- BREAKING: `target` defaults to `es2025` in v6.0 (was `es3` in v5.9) — only affects output runtime features; set explicit target for legacy runtimes [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L490)

### Deprecated Compiler Options

- DEPRECATED: `--target es5` — v6.0 will error on `target: es5`, lowest allowed is `es2015`; use external compiler for ES5 output [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L569:L575)

- DEPRECATED: `--moduleResolution node`/`node10` — v6.0 deprecates this; migrate to `nodenext` (Node.js) or `bundler` (bundlers/Bun) [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L585:L591)

- DEPRECATED: `--downlevelIteration` — v6.0 deprecates since it only affects ES5 emit (which is also deprecated) [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L577:L583)

- DEPRECATED: `--baseUrl` — v6.0 deprecates as lookup root; use `paths` with explicit prefixes instead (e.g., `"@app/*": ["./src/app/*"]`) [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L608:L664)

- DEPRECATED: `--esModuleInterop false`, `--allowSyntheticDefaultImports false` — v6.0 no longer allows `false`; interop behavior always enabled [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L672:L692)

- DEPRECATED: `--moduleResolution classic` — removed in v6.0; use `nodenext` or `bundler` [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L666:L670)

- DEPRECATED: `--alwaysStrict false` — v6.0 deprecates; all code assumed strict mode [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L694:L698)

### New Features (v6.0)

- NEW: `--stableTypeOrdering` flag — v6.0 adds to match v7.0 type ordering (experimental, adds ~25% perf cost) for migration testing [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L280:L340)

- NEW: `es2025` target and lib — v6.0 adds ES2025 standard support with `RegExp.escape`, `Promise.try`, `Iterator` methods [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L342:L344)

- NEW: `Temporal` API types — v6.0 includes stage-4 Temporal proposal types in `esnext.temporal` lib [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L346:L361)

- NEW: `Map.prototype.getOrInsert()`, `Map.prototype.getOrInsertComputed()` — v6.0 adds ES upsert methods for convenience get-or-default [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L363:L416)

- NEW: `RegExp.escape()` — v6.0 adds static method to escape special characters in regex patterns (ES2025) [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L418:L433)

### Module Resolution Changes (v6.0)

- NEW: `#/` subpath imports — v6.0 supports Node.js subpath imports starting with `#/` in `package.json` imports field [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L213:L265)

- NEW: `--moduleResolution bundler` with `--module commonjs` — v6.0 allows this combination (previously only with `esnext`/`preserve`) [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L267:L278)

### Type System Improvements (v6.0)

- IMPROVED: Context-insensitive `this`-less functions in type inference — v6.0 skips functions with no `this` usage during inference, allowing order-independent type resolution [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L153:L211)

### Library Changes (v6.0)

- BREAKING: DOM lib consolidated — v6.0 merges `dom.iterable` and `dom.asynciterable` into `dom`; only need `"lib": ["dom"]` for iteration methods [source](./.skilld/docs/docs/handbook/release-notes/typescript-6-0.html.md:L435:L452)

### Recent Changes (v5.9)

- NEW: `import defer * as module` syntax — v5.9 adds deferred module evaluation (stage 4 proposal); modules only execute on first property access [source](./.skilld/docs/docs/handbook/release-notes/typescript-5-9.html.md:L174:L226)

- NEW: `--module node20` — v5.9 adds stable Node.js v20 target (unlike floating `nodenext`) with `--target es2023` default [source](./.skilld/docs/docs/handbook/release-notes/typescript-5-9.html.md:L230:L236)

- BREAKING: `ArrayBuffer` type hierarchy — v5.9 breaks; `ArrayBuffer` no longer supertype of `TypedArray`/`Buffer`, requires explicit `.buffer` or `Uint8Array<ArrayBuffer>` [source](./.skilld/docs/docs/handbook/release-notes/typescript-5-9.html.md:L283:L316)

**Also changed:** `ignoreDeprecations: "6.0"` disables deprecation errors for v6.0-only settings · `tsc --ignoreConfig` skips tsconfig.json · `tsc --init` generates minimal config · Hover length now configurable · expandable hovers (preview) · improved DOM API descriptions
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Use lowercase `string`, `number`, `boolean`, and `symbol` types instead of capitalized versions (`String`, `Number`, `Boolean`, `Symbol`) — the capitalized versions refer to boxed objects which are almost never used in JavaScript code [source](./.skilld/docs/docs/handbook/declaration-files/do-s-and-don-ts.html.md#number-string-boolean-symbol-and-object)

- Use `void` as the return type for callback functions whose return value will be ignored — this prevents accidental use of the return value and provides type safety that `any` cannot offer [source](./.skilld/docs/docs/handbook/declaration-files/do-s-and-don-ts.html.md#return-types-of-callbacks)

- Define generic type constraints with `extends` to enforce requirements on type parameters instead of using `any` — this maintains type safety while allowing flexibility [source](./.skilld/docs/docs/handbook/generics.html.md#generic-constraints)

```ts
interface Lengthwise { length: number }
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
```

- Use `unknown` instead of `any` when accepting values of any type but you intend to perform type checking before using them — this preserves type safety and forces explicit type guards [source](./.skilld/docs/docs/handbook/declaration-files/do-s-and-don-ts.html.md#any)

- Use union types in function parameters instead of multiple overloads when type changes across parameters — this improves type inference and correctness for higher-order functions [source](./.skilld/docs/docs/handbook/declaration-files/do-s-and-don-ts.html.md#use-union-types)

```ts
// Preferred over separate overloads
interface Moment {
  utcOffset(): number
  utcOffset(b: number | string): Moment
}
```

- Order function overloads from most specific signatures to least specific — TypeScript uses the first matching overload, so general overloads placed first will hide more specific ones [source](./.skilld/docs/docs/handbook/declaration-files/do-s-and-don-ts.html.md#ordering)

- Replace multiple overloads that differ only in trailing parameters with optional parameters — this aligns with function signature compatibility rules and supports strict null checking correctly [source](./.skilld/docs/docs/handbook/declaration-files/do-s-and-don-ts.html.md#use-optional-parameters)

- Use `Readonly<T>` utility type to document immutability contracts and pair with `Object.freeze()` for runtime enforcement — this prevents accidental mutations at the type level [source](./.skilld/docs/docs/handbook/utility-types.html.md#readonlytype)

- Use `Pick<T, Keys>` and `Omit<T, Keys>` to derive focused types from existing interfaces rather than duplicating property definitions — this maintains a single source of truth and reduces maintenance burden [source](./.skilld/docs/docs/handbook/utility-types.html.md#picktype-keys)

- Use arrow functions for callbacks in object methods to capture `this` binding automatically instead of using regular functions and `.bind()` — this prevents common `this` context errors and is more concise [source](./.skilld/docs/docs/handbook/functions.html.md#this-and-arrow-functions)

```ts
let deck = {
  suits: ["hearts", "spades"],
  createCardPicker: function () {
    return () => {
      // Arrow function captures `this` from createCardPicker
      return this.suits[0]
    }
  }
}
```

- Specify explicit `this` parameter types in method signatures to enable type checking of context — this catches binding errors at compile time rather than runtime [source](./.skilld/docs/docs/handbook/functions.html.md#this-parameters)

- Avoid heterogeneous enums mixing string and numeric values unless specifically leveraging JavaScript runtime behaviour — consistency in enum value types improves readability and reduces confusion [source](./.skilld/docs/docs/handbook/enums.html.md#heterogeneous-enums)

- Declare inferred class properties with JSDoc `@type` annotations in JavaScript files when types cannot be inferred from assignments — this provides explicit type control without requiring migration to TypeScript [source](./.skilld/docs/docs/handbook/type-checking-javascript-files.html.md#properties-are-inferred-from-assignments-in-class-bodies)
<!-- /skilld:best-practices -->
