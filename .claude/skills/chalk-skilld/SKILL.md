---
name: chalk-skilld
description: "ALWAYS use when writing code importing \"chalk\". Consult for debugging, best practices, or modifying chalk."
metadata:
  version: 5.6.2
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# chalk/chalk `chalk@5.6.2`
**Tags:** next: 3.0.0-beta.2, latest: 5.6.2

**References:** [package.json](./.skilld/pkg/package.json) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p chalk` instead of grepping `.skilld/` directories. Run `skilld search --guide -p chalk` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

- BREAKING: Package is now ESM-only — requires Node.js 12.20+. CommonJS consumers must use Chalk v4 or add a transpilation step. This is the most significant v5.0.0 change and will cause runtime errors if ignored [source](./.skilld/releases/v5.0.0.md#breaking)

- BREAKING: Removed colour methods `.keyword()`, `.hsl()`, `.hsv()`, `.hwb()`, `.ansi()` — use the `color-convert` package if you need these conversions. This reduces bundle size by ~20% [source](./.skilld/releases/v5.0.0.md#breaking)

- BREAKING: Export moved: `chalk.Instance` is now the named export `Chalk` — use `import {Chalk} from 'chalk'` instead of `chalk.Instance` [source](./.skilld/releases/v5.0.0.md#breaking)

- BREAKING: Export moved: `chalk.supportsColor` is now the named export `supportsColor` — use `import {supportsColor} from 'chalk'` [source](./.skilld/releases/v5.0.0.md#breaking)

- BREAKING: Export moved: `chalk.stderr` is now the named export `chalkStderr` — use `import {chalkStderr} from 'chalk'` [source](./.skilld/releases/v5.0.0.md#breaking)

- BREAKING: Export moved: `chalk.stderr.supportsColor` is now the named export `supportsColorStderr` — use `import {supportsColorStderr} from 'chalk'` [source](./.skilld/releases/v5.0.0.md#breaking)

- BREAKING: Tagged template literal syntax moved to separate package — `chalk\`...\`` is no longer valid. Use the `chalk-template` package with `import chalkTemplate from 'chalk-template'` instead [source](./.skilld/releases/v5.0.0.md#breaking)``

- NEW: `modifierNames`, `foregroundColorNames`, `backgroundColorNames`, `colorNames` arrays — expose all supported style names as arrays. Use when validating user input or building dynamic style selectors [source](./.skilld/releases/v5.1.0.md)

- NEW: `overline` style modifier — applies a horizontal line above text. Available as `chalk.overline` [source](./.skilld/releases/v5.0.0.md#improvements)

**Also deprecated:** `Modifiers`, `ForegroundColor`, `BackgroundColor`, `Color` types (use `ModifierName`, `ForegroundColorName`, `BackgroundColorName`, `ColorName` instead) · `modifiers`, `foregroundColors`, `backgroundColors`, `colors` exports (use `modifierNames`, `foregroundColorNames`, `backgroundColorNames`, `colorNames` instead) [source](./.skilld/pkg/./source/index.d.ts:L262:323)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Create reusable Chalk instances with `new Chalk()` for modules that need consistent color configuration instead of relying on the global default, which can be overridden by consumers [source](./.skilld/pkg/README.md:L122-L134)

- Define semantic style themes by composing chalk styles into an object once rather than repeating styled expressions throughout your codebase, enabling centralized style updates without refactoring multiple call sites [source](./.skilld/issues/issue-666.md)

- Use the `visible` modifier to conditionally display cosmetic text only in terminals that support colors, preventing unnecessary output in piped or non-color environments [source](./.skilld/pkg/README.md:L169-L184)

- Leverage `modifierNames`, `foregroundColorNames`, `backgroundColorNames`, and `colorNames` arrays when validating style input in wrapper functions or CLI tools [source](./.skilld/pkg/README.md:L155-L169)

- Use `supportsColor` or `supportsColorStderr` to detect terminal capabilities and conditionally apply styles only when colors are actually supported, rather than attempting colors in all environments [source](./.skilld/pkg/README.md:L143-L149)

- Set the `FORCE_COLOR` environment variable for CI systems that don't auto-detect color support (level 0-3), or use `--color` and `--no-color` flags to let users override detection [source](./.skilld/pkg/README.md:L143-L149)

- Use `chalkStderr` instead of the default `chalk` instance when styling stderr output, as it detects color support separately from stdout [source](./.skilld/pkg/README.md:L151-L153)

- Pass multiple style arguments as separate parameters to chalk functions rather than concatenating strings, which automatically joins them with spaces and improves readability [source](./.skilld/pkg/README.md:L64-L66)

- Use the named brightness color properties (`redBright`, `greenBright`, etc.) instead of manually calculating RGB values with `rgb()`, as they are optimized for terminal display [source](./.skilld/pkg/README.md:L195-L222)

- Use `hex()` and `rgb()` methods for custom colors instead of relying on the removed `.keyword()` method from v4; if you need CSS color name support, use the `color-convert` library [source](./.skilld/releases/v5.0.0.md:L22-L24)

- Override only the `level` property in Chalk options when creating instances, as it's the primary configuration point; avoid global mutations that affect all consumers [source](./.skilld/pkg/README.md:L12-L25)

- Chain styles in any order since later styles take precedence for conflicting attributes; leverage this to create adaptive styles without worrying about declaration order [source](./.skilld/pkg/README.md:L234-L240)

- Rely on Chalk's automatic color-level downsampling when using RGB or hex colors—specify the color you want and let Chalk handle terminal-specific reduction (ANSI 16/256/truecolor) [source](./.skilld/pkg/README.md:L224-L228)

- Validate version compatibility and migration paths if upgrading from v4 to v5, as v5 is ESM-only and removes several color methods; keep v4 if you need CommonJS or the removed color APIs [source](./.skilld/releases/v5.0.0.md:L11-L22)
<!-- /skilld:best-practices -->
