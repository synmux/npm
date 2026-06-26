---
name: biomejs-biome-skilld
description: "ALWAYS use when writing code importing \"@biomejs/biome\". Consult for debugging, best practices, or modifying @biomejs/biome, biomejs/biome, biomejs biome, biome."
metadata:
  version: 2.5.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# biomejs/biome `@biomejs/biome@2.5.1`
**Tags:** nightly: 1.9.5-nightly.81fdedb, beta: 2.0.0-beta.6, latest: 2.5.1

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @biomejs/biome` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @biomejs/biome` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes — @biomejs/biome v2.4.x

This section documents version-specific API changes across Biome v2.4.0–v2.4.16. Focus on recent major/minor releases and breaking changes.

## Breaking Changes and Config

BREAKING: HTML formatter overhaul — The HTML formatter (still experimental) was completely rewritten in v2.4.0 to match Prettier's formatting model. If you use the HTML formatter, expect large formatting diffs, especially around whitespace-sensitive elements and comment placement. Previous Prettier-incompatible formatting has been corrected. [source](./.skilld/releases/@biomejs/biome@2.4.0.md#breaking-changes)

BREAKING: Nursery rule promotion — 21 nursery rules were promoted to stable rule groups in v2.4.0. Rule paths and configuration changed from `nursery/<ruleName>` to `correctness/<ruleName>`, `suspicious/<ruleName>`, `complexity/<ruleName>`, or `style/<ruleName>`. Affected rules: `noUnresolvedImports`, `noVueReservedProps`, `noVueReservedKeys`, `noVueDataObjectDeclaration`, `noNextAsyncClientComponent`, `noVueDuplicateKeys`, `noVueSetupPropsReactivityLoss`, `useQwikMethodUsage`, `useQwikValidLexicalScope`, `noImportCycles`, `noDeprecatedImports`, `noReactForwardRef`, `noUnusedExpressions`, `noEmptySource`, `useDeprecatedDate`, `noDuplicateDependencies`, `noUselessUndefined`, `useMaxParams`, `noUselessCatchBinding`, `useConsistentArrowReturn`, `noJsxLiterals`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L386:L445)

BREAKING: `useExplicitType` rule relaxed in v2.4.11 — Type annotations can now be omitted when types are trivially inferrable from binary expressions, comparisons, logical expressions, class instantiation, array literals, conditional expressions, and function calls. Function parameters with default values no longer require type annotations. [source](./.skilld/releases/@biomejs/biome@2.4.11.md:L128:L149)

## New CLI Options and Reporters

NEW: `--reporter=sarif` — Added SARIF (Static Analysis Results Format) output support in v2.4.0. Use this for integrating Biome diagnostics with tools that consume SARIF-formatted reports. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L110)

NEW: Multiple reporters — `--reporter` can now be specified multiple times in a single command. Additionally, `--reporter-file` allows saving reporter output to a file. Both flags can be combined (e.g., `biome ci --reporter=default --reporter=rdjson --reporter-file=/tmp/report.json`). The flags must appear next to each other. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L41:L68)

NEW: `--watcher-kind` and `--watcher-polling-interval` — New CLI options for controlling the Biome file watcher in `lsp-proxy` and `start` commands. `--watcher-kind` accepts `recommended` (default), `polling`, or `none`. `--watcher-polling-interval` sets polling interval in milliseconds (default 2000). Environment variables `BIOME_WATCHER_KIND` and `BIOME_WATCHER_POLLING_INTERVAL` provide aliases. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L186:L206)

NEW: `--only` and `--skip` options — Added to `biome check` and `biome ci` commands in v2.4.0 to control which lint rules and assist actions execute. Accept rule names, group names, or domains (e.g., `--only=suspicious/noDebugger`, `--skip=project`). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L636:L644)

NEW: `--profile-rules` CLI flag — Enables rule profiler in v2.4.0, reporting which lint rules consumed the most execution time. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L536:L537)

## Formatter Options

NEW: `trailingNewline` formatter option — Added in v2.4.0. When set to `false`, the formatter removes trailing newlines at the end of formatted files (default `true` preserves them). Available globally and per-language in configuration. CLI flags added: `--formatter-trailing-newline`, `--javascript-formatter-trailing-newline`, `--json-formatter-trailing-newline`, `--graphql-formatter-trailing-newline`, `--css-formatter-trailing-newline`, `--html-formatter-trailing-newline`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L672:L698)

NEW: `formatter.trailingCommas` in overrides — Added support for `formatter.trailingCommas` in configuration overrides in v2.4.16. This option was previously only available in top-level formatter configuration. [source](./.skilld/releases/@biomejs/biome@2.4.16.md:L56)

## HTML Linting Rules

NEW: `useAnchorContent` rule — Enforces that anchor elements have accessible content for screen readers (v2.4.0). Flags empty anchors, anchors with only whitespace, and anchors where all content is hidden with `aria-hidden`. Anchors with `aria-label` or `title` attributes providing non-empty accessible names are valid. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L37:L38)

NEW: `useMediaCaption` rule — Enforces that `audio` and `video` elements have a `track` element with `kind="captions"` (v2.4.0). Muted videos are allowed without captions. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L39:L40)

NEW: `useHtmlLang` rule — Enforces that the `html` element has a non-empty `lang` attribute (v2.4.0). Flags `<html>`, `<html lang>`, and `<html lang="">`. Valid: `<html lang="en">`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L207:L222)

NEW: `useValidAriaRole` rule — Enforces that elements with ARIA roles use a valid, non-abstract role (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L348:L349)

NEW: `useAriaPropsForRole` rule — Enforces that elements with ARIA roles have all required ARIA attributes for that role (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L620:L621)

NEW: `useIframeTitle` rule — Enforces usage of the `title` attribute for `iframe` elements (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L112:L124)

NEW: `noAccessKey` rule — Enforces that the `accesskey` attribute is not used, as it can conflict with screen reader and keyboard commands (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L472:L488)

NEW: `useButtonType` rule — Enforces that the `type` attribute is present and valid on `button` elements (v2.4.0). Valid values: `button`, `reset`, `submit`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L714:L731)

NEW: `useValidLang` rule — Enforces valid `lang` values (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L162:L163)

NEW: `noPositiveTabindex` rule — Prevents usage of positive integers on the `tabindex` attribute, which disrupts natural keyboard navigation order (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L311:L312)

NEW: `useAltText` rule — Enforces that elements requiring alternative text (`<img>`, `<area>`, `<input type="image">`, `<object>`) provide meaningful information via `alt`, `title`, `aria-label`, or `aria-labelledby` attributes. Exempts elements with `aria-hidden="true"` (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L313:L314)

NEW: `noAutofocus` rule — Enforces that the `autofocus` attribute is not used (v2.4.0). Allows `autofocus` in `dialog` elements or elements with the `popover` attribute (modal contexts). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L309:L310)

NEW: `noSvgWithoutTitle` rule — Enforces usage of the `title` element for `svg` elements (v2.4.0). Supports `graphics-document` and `graphics-symbol` roles, and multiple role specifications. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L712:L713)

NEW: `noDistractingElements` rule — Enforces that distracting elements like `<marquee>` and `<blink>` are not used (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L287:L288)

NEW: `noRedundantAlt` rule — Enforces that the `img` element `alt` attribute does not contain the words "image", "picture", or "photo" (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L645:L646)

## Rule Configuration Options

NEW: `ignore` option for `useHookAtTopLevel` — Added in v2.4.0 to specify function names that should not be treated as hooks, even if they follow the `use*` naming convention. Configure with `options: { ignore: ["useDebounce", "useCustomUtility"] }`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L15:L35)

NEW: `ignore` option for `noUnknownProperty` — Prevents diagnostic emission when unknown property names match items in the `ignore` list (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L108:L109)

NEW: `ignore` option for `noUnknownFunction` — Prevents diagnostic emission when unknown function names match items in the `ignore` list (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L350:L351)

NEW: `ignore` option for `noUnknownPseudoClass` — Prevents diagnostic emission when unknown pseudo-class names match items in the `ignore` list (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L352:L353)

NEW: `ignore` option for `noUnknownPseudoElement` — Prevents diagnostic emission when unknown pseudo-element names match items in the `ignore` list (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L552:L553)

NEW: `checkForEach` option for `useIterableCallbackReturn` — When set to `false`, skips checking for `forEach()` callbacks for returning values (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L160:L161)

NEW: `extensionMappings` option for `useImportExtensions` — Allows custom file extension mappings for different module types (v2.4.0). Example: `{ "extensionMappings": { "ts": "js" } }` enforces `.js` imports over `.ts`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L622:L635)

NEW: `ignoreDifferentlyNamedParameters` and `ignoreDifferentJsDoc` options for `useUnifiedTypeSignatures` — Each option makes the rule ignore overload signatures whose parameter names or JSDoc comments differ (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L514:L535)

NEW: `variableDeclarator` and `assignmentExpression` options for `useDestructuring` — Added in v2.4.16 to control which contexts enforce destructuring. Both default to `{ array: true, object: true }`. The diagnostic for object destructuring in assignment expressions now instructs users to wrap the assignment in parentheses. [source](./.skilld/releases/@biomejs/biome@2.4.16.md:L50)

NEW: `groupByNesting` option for `useSortedKeys` assist — When enabled, object keys are grouped by their value's nesting depth before sorting alphabetically (v2.4.0). Simple values sort first, followed by nested values. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L261:L307)

## New Linter Rules

NEW: `useExplicitReturnType` rule (experimental) — Reports TypeScript functions and methods that omit an explicit return type (v2.4.11). [source](./.skilld/releases/@biomejs/biome@2.4.11.md:L27:L34)

NEW: `noMisleadingReturnType` rule — Detects when a function's return type annotation is wider than what the implementation actually returns (v2.4.11). For example, `: string` is wider than `"loading" | "idle"`. [source](./.skilld/releases/@biomejs/biome@2.4.11.md:L42:L50)

NEW: `useDisposables` rule — Detects disposable objects (implementing `Disposable` or `AsyncDisposable` interface) assigned to variables without `using` or `await using` syntax (v2.4.11). [source](./.skilld/releases/@biomejs/biome@2.4.11.md:L56:L84)

NEW: `noReactStringRefs` rule (nursery) — Disallows legacy React string refs such as `ref="hello"` and `this.refs.hello` (v2.4.14). Also reports template-literal refs like ``ref={`hello`}`` to encourage migration to callback refs, `createRef()`, or `useRef()`. [source](./.skilld/releases/@biomejs/biome@2.4.14.md:L74:L76)

NEW: `useMathMinMax` rule (nursery) — Prefers `Math.min()` and `Math.max()` over equivalent ternary comparisons (v2.4.14). [source](./.skilld/releases/@biomejs/biome@2.4.14.md:L128:L140)

NEW: `useTestHooksOnTop` rule (nursery, `test` domain) — Flags lifecycle hooks (`beforeEach`, `beforeAll`, `afterEach`, `afterAll`) that appear after test cases in the same block (v2.4.14). [source](./.skilld/releases/@biomejs/biome@2.4.14.md:L15:L16)

NEW: `useConsistentTestIt` rule (nursery, `test` domain) — Enforces consistent use of either `it` or `test` for test functions in Jest/Vitest suites, with separate control for top-level tests and tests inside `describe` blocks (v2.4.11). [source](./.skilld/releases/@biomejs/biome@2.4.11.md:L15:L25)

## Assist Actions

NEW: `useSortedInterfaceMembers` assist action — Sorts TypeScript interface members for readability with autofix (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L126:L150)

NEW: `noDuplicateClasses` assist action — Detects and removes duplicate CSS classes (v2.4.0). Supports `class`, `className` attributes and utility functions like `clsx`, `cn`, `cva` in JSX. Checks `class` attributes in HTML files. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L354:L366)

## CSS and Language Support

NEW: CSS `@function` at-rule support — Added support for parsing and formatting the CSS `@function` at-rule from the CSS Mixins Module Level 1 specification (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L703:L710)

NEW: CSS typed `attr()` function — Support for the typed `attr` function in CSS (v2.4.0). Example: `.btn { width: attr(data-size type(<length> | <percentage>), 0px); }` [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L462:L470)

NEW: Embedded GraphQL snippets (experimental) — Support for formatting and linting embedded GraphQL in JavaScript with import sources like `graphql-tag` and `graphql()` functions (v2.4.0). Must enable with `javascript: { experimentalEmbeddedSnippetsEnabled: true }`. Snippets with interpolations are not yet supported. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L223:L249)

NEW: Embedded CSS snippets (experimental) — Support for formatting and linting embedded CSS in JavaScript with styled-components and Emotion imports (v2.4.0). Must enable with `javascript: { experimentalEmbeddedSnippetsEnabled: true }`. Snippets with interpolations are not yet supported. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L568:L618)

NEW: CSS modules automatic detection — Biome now automatically enables CSS modules parsing for `*.module.css` files (v2.4.0). The `cssModules` parser feature can be removed from configuration. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L368:L380)

NEW: CSS `:global` and `:local` parsing — Added support for parsing `:global` and `:local` inside `.astro`, `.svelte`, and `.vue` files in the `` portion (v2.4.0). Requires `experimentalFullHtmlSupportedEnabled: true`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L382:L384)``

NEW: Vue CSS `v-bind()` function — Added support for parsing Vue's `v-bind()` function in CSS when Vue CSS modules parsing is enabled (v2.4.0). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L861:L862)

NEW: GritQL JSON support — Added JSON as a target language for GritQL pattern matching (v2.4.0). Enables writing Grit plugins for JSON files with support for native Biome AST names (`JsonMember`, `JsonObjectValue`) and TreeSitter-compatible names (`pair`, `object`, `array`). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L79:L106)

## Configuration and Features

NEW: `biome-ignore-all format:` top-level suppression comment — When placed at the beginning of a document, prevents formatting of the entire file (v2.4.0). Works for all supported languages. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L446:L460)

NEW: Cursor files support — Biome now parses Cursor JSON configuration files with comments and trailing commas enabled (v2.4.0). Paths: `$PROJECT/.cursor/`, `%APPDATA%\Cursor\User\` (Windows), `~/Library/Application Support/Cursor/User/` (macOS), `~/.config/Cursor/User/` (Linux). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L73:L77)

NEW: LSP inline configuration (`inlineConfig`) — Editors can inject Biome configuration to the Language Server without affecting project configuration (v2.4.0). Configuration merges with project configuration. Example for Zed: `lsp: { biome: { settings: { inline_config: { formatter: { indentStyle: "space", indentWidth: 4 } } } } }` [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L490:L512)

NEW: `jsxFactory` and `jsxFragmentFactory` support — Biome now respects `jsxFactory` and `jsxFragmentFactory` settings from `tsconfig.json` when using the classic JSX runtime (v2.4.0). Prevents false positive `noUnusedImports` errors for custom JSX libraries like Preact. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L164:L184)

NEW: Configuration loading from standard config directories — Biome can now load configuration from standard OS-specific paths in addition to the project folder (v2.4.0). Priority: project folder → parent folders → config home (`$XDG_CONFIG_HOME` or `$HOME/.config/biome` on Linux; `/Users/$USER/Library/Application Support/biome` on macOS; `C:\Users\$USER\AppData\Roaming\biome\config` on Windows). [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L554:L567)

NEW: Hidden configuration files — Biome now loads `.biome.json` and `.biome.jsonc` (hidden files) in addition to regular names (v2.4.0). Load order: `biome.json` → `biome.jsonc` → `.biome.json` → `.biome.jsonc`. [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L666:L671)

Also changed: `types` linter domain added · Markdown parser and formatter scaffolding · SCSS support enhancements · Svelte function binding parsing improved · Vue `v-for` variable tracking improved · CSS `corner-shape` family properties and `superellipse()` function support · Multiple Svelte/Astro/Vue parsing and formatting improvements
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Extend root configuration in monorepo packages using `"extends": "//"` and resolve glob patterns relative to the project root — ensures consistent configuration inheritance and predictable file inclusion across nested projects without duplicating setup [source](./.skilld/releases/@biomejs/biome@2.3.15.md:L45-L47)

- Configure `javascript.jsxRuntime` to match your environment (`"reactClassic"` vs modern React) — the runtime affects how rules like `noUnusedImports` and `useImportType` treat React identifier imports, and must align with your actual build configuration [source](./.skilld/releases/@biomejs/biome@2.3.15.md:L51)

- Provide `jsxFactory` and `jsxFragmentFactory` settings from `tsconfig.json` when using custom JSX libraries like Preact — Biome respects these settings to prevent false positive `noUnusedImports` errors for custom JSX implementations using the classic runtime [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L164-L184)

- Use `configuration_schema.json` in your editor by pointing `"$schema"` to the bundled schema — enables IDE autocompletion and catches configuration typos before runtime [source](./.skilld/pkg/package.json:L19)

- Structure `organizeImports` groups with explicit type filters (`"type": false` and `"type": true`) to control matching priority — import groups are matched in order, so overlapping criteria without explicit type distinction make later matchers ineffective [source](./.skilld/discussions/discussion-9401.md:L14-L35)

- Use multiple reporters in CI pipelines combined with `--reporter-file` for terminal feedback and machine-readable output — separating reporter outputs (default to console, rdjson or sarif to file) enables both human-friendly diagnostics and automated processing [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L41-L67)

- Configure `useHookAtTopLevel` with the `ignore` option to exclude utility functions following the `use*` naming convention that aren't React Hooks — prevents false positives when custom hooks shouldn't be treated as top-level calls [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L15-L35)

- Apply `useDestructuring` rule options (`variableDeclarator` and `assignmentExpression`) separately to control contexts enforcing destructuring — both options default to `{array: true, object: true}`, but may be disabled per context based on code style preferences [source](./.skilld/releases/@biomejs/biome@2.4.16.md:L50)

- Use `noUnknownProperty` with the `ignore` option for framework-specific or vendor properties that Biome doesn't recognise — avoids false positives while keeping the rule enabled for real typos [source](./.skilld/releases/@biomejs/biome@2.4.0.md:L108-L110)

- Apply `formatter.trailingCommas` in formatter overrides to enforce trailing commas per language or pattern — this option was previously only available at top-level and must be set per-override context to take effect [source](./.skilld/releases/@biomejs/biome@2.4.16.md:L56)

- Run Playwright test rules (`noPlaywrightForceOption`, `noPlaywrightMissingAwait`, `noPlaywrightWaitForNavigation`) as nursery rules for robust end-to-end test quality — consolidate best practices from modern Playwright APIs with rule-based detection of deprecated patterns [source](./.skilld/releases/@biomejs/biome@2.4.2.md:L35-L96)

- Enable `useVueScopedStyles` in Vue projects to enforce the `scoped` or `module` attribute on `` blocks — prevents style leakage between components without explicit scoping [source](./.skilld/releases/@biomejs/biome@2.4.5.md:L15)

- Prefer `useNullishCoalescing` over logical OR (`||`) when the left operand may be nullish — the nullish coalescing operator (`??`) correctly handles falsy but valid values like `0`, `''`, and `false` that OR incorrectly treats as missing [source](./.skilld/releases/@biomejs/biome@2.4.5.md:L64-L73)

- Verify formatter output against Prettier using the online playground before deploying custom rules — Biome targets 97% Prettier compatibility, but validating specific patterns through the playground ensures expected formatting behaviour [source](./.skilld/discussions/discussion-9536.md:L49-L51)
<!-- /skilld:best-practices -->
