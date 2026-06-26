---
name: gradient-string-skilld
description: "ALWAYS use when writing code importing \"gradient-string\". Consult for debugging, best practices, or modifying gradient-string, gradient string."
metadata:
  version: 3.0.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# bokub/gradient-string `gradient-string@3.0.0`
**Tags:** latest: 3.0.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p gradient-string` instead of grepping `.skilld/` directories. Run `skilld search --guide -p gradient-string` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

### Breaking Changes (v2 → v3)

- BREAKING: `require()` no longer supported — v3 is pure ESM, must use `import` statements [source](./.skilld/releases/v3.0.0.md#breaking-changes)

- BREAKING: `gradient(color1, color2, color3)` variadic syntax removed — pass colors in an array: `gradient(['red', 'blue', 'green'])` [source](./.skilld/releases/v3.0.0.md#breaking-changes)

- BREAKING: Options parameter moved from function call to initialization — `gradient(['red', 'blue'], { interpolation: 'hsv' })` then call the result; cannot pass options when invoking [source](./.skilld/releases/v3.0.0.md#breaking-changes)

- BREAKING: Gradient aliases (atlas, cristal, teen, mind, morning, vice, passion, fruit, instagram, retro, summer, rainbow, pastel) no longer accessible as properties on the default `gradient` object — must import directly instead [source](./.skilld/releases/v3.0.0.md#deprecated)

- BREAKING: Node.js 10 support dropped — now requires Node.js 14+ [source](./.skilld/releases/v3.0.0.md#breaking-changes)

### New Features (v3)

- NEW: Full TypeScript rewrite with exported type definitions — `GradientOptions` interface exposes `interpolation: 'rgb' | 'hsv'` and `hsvSpin: 'short' | 'long'` options for type-safe gradient creation [source](./.skilld/pkg/dist/index.d.ts:L3-L6)

- NEW: Named imports for all 13 built-in gradient aliases — `import { rainbow, pastel, instagram } from 'gradient-string'` provides better tree-shaking and IDE support over property access [source](./.skilld/releases/v3.0.0.md#deprecated)

**Also changed:** Pure ESM module system · Dependencies updated (chalk, tinygradient) · Vitest test suite
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Import named gradient exports directly instead of accessing properties on the default export — `import { rainbow, pastel } from 'gradient-string'` enables proper tree-shaking and avoids deprecation warnings in v3+ [source](./.skilld/pkg/README.md#built-in-gradients)

- Use `.multiline()` when applying gradients to multi-line text or ASCII art — ensures colors are distributed horizontally across each line rather than vertically down the text [source](./.skilld/pkg/README.md#multi-line-gradients)

- Pass all options when initializing the gradient, not when calling it — v3 deprecated passing options as a second argument to the gradient function; configure at creation time instead [source](./.skilld/releases/v3.0.0.md#deprecated)

- Always pass colors as an array `gradient(['red', 'blue'])` rather than separate arguments `gradient('red', 'blue')` — the spread syntax is deprecated in v3 and may be removed in future versions [source](./.skilld/releases/v3.0.0.md#deprecated)

- Use HSV interpolation for perceptually brighter gradients — RGB is the default but HSV typically produces more visually appealing color transitions, especially for vibrant terminal output [source](./.skilld/pkg/README.md#color-interpolation)

- Use `hsvSpin: 'long'` when you need to traverse the full color wheel between two colors — defaults to `'short'` which takes the shortest path; use `'long'` to visit more intermediate hues [source](./.skilld/pkg/README.md#hsvSpin)

- Leverage TinyColor's flexible color format support — the library accepts named colors, hex strings, RGB/HSV objects, and CSS RGB strings, so you can use whatever format fits your data source [source](./.skilld/pkg/README.md#initialize-a-gradient)

- Define custom color stops with precise positions for more control over gradient distribution — use `{ color: '#d8e0de', pos: 0 }` syntax where `pos` ranges from 0 to 1 to place colors at specific points along the gradient [source](./.skilld/pkg/README.md#custom-color-stops)

- Cache gradient function instances when reusing the same gradient multiple times — creating the gradient once and storing it is more efficient than recreating it for each call [source](./.skilld/pkg/README.md#use-a-gradient)

- Combine gradient-string with chalk for layered text effects — gradient handles color transitions across characters while chalk provides bold, underline, and other formatting on top [source](./.skilld/pkg/README.md#dependencies)

- Use built-in gradient presets (rainbow, pastel, atlas, etc.) for consistent, production-ready gradients — these are carefully tuned and handle edge cases, making them more reliable than ad-hoc color arrays [source](./.skilld/pkg/README.md#built-in-gradients)

- Ensure Node.js 14+ for v3 compatibility — v3 is pure ESM and requires newer Node versions; if supporting older Node, pin to v2 [source](./.skilld/releases/v3.0.0.md#warning-v2-to-v3-migration)

- For multi-line terminal output with spinner animations, apply gradients after animation completes — gradient-string is ideal for static output; combine with chalk-animation for dynamic effects [source](./.skilld/releases/v3.0.0.md)

- Avoid relying on deprecated default export properties like `gradient.rainbow()` — the pattern still works in v3 but is marked deprecated; migrate to named imports to future-proof your code [source](./.skilld/releases/v3.0.0.md#deprecated)
<!-- /skilld:best-practices -->
