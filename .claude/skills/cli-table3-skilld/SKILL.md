---
name: cli-table3-skilld
description: "ALWAYS use when writing code importing \"cli-table3\". Consult for debugging, best practices, or modifying cli-table3, cli table3."
metadata:
  version: 0.6.5
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# cli-table/cli-table3 `cli-table3@0.6.5`
**Tags:** latest: 0.6.5

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p cli-table3` instead of grepping `.skilld/` directories. Run `skilld search --guide -p cli-table3` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## cli-table3 API Changes

This section documents version-specific API changes in cli-table3. Focus on recent major/minor releases and breaking changes.

## New APIs (v0.6.2 onwards)

- NEW: `wrapOnWordBoundary` boolean option — v0.6.2 adds support for consistently readable word wrapping at word boundaries instead of mid-word truncation. Set on table or per-cell in `CellOptions` [source](./.skilld/releases/v0.6.2.md#hyperlinks-alternate-word-wrap-debugging-and-bug-fixes)

- NEW: `href` property in `CellOptions` — v0.6.2 enables hyperlink support for individual cells using OSC-8 escape sequences; make clickable terminal links via the cell content [source](./.skilld/releases/v0.6.2.md#hyperlinks-alternate-word-wrap-debugging-and-bug-fixes)

- NEW: `debug` option and `messages` array — v0.6.2 adds debugging capability; set `debug: 1` on table instantiation, then iterate `table.messages` after `toString()` to see diagnostic output. Call `Table.reset()` between multiple tables with debug enabled [source](./.skilld/releases/CHANGELOG.md#v062-2022-04-11)

- NEW: Per-cell `wordWrap` and `wrapOnWordBoundary` overrides — v0.6.3 allows overriding table-level word wrap settings on individual cells via `CellOptions` [source](./.skilld/releases/CHANGELOG.md#v063-2022-09-15)

- NEW: `bigint` support in cell content — v0.6.5 adds `bigint` as a valid `CellValue` type alongside `boolean`, `number`, `string`, `null`, and `undefined` [source](./.skilld/releases/v0.6.5.md#whats-changed)

## Breaking Changes

- BREAKING: Node 6 and 8 support dropped — v0.6.0 raises minimum Node.js version requirement; older Node versions will not run [source](./.skilld/releases/CHANGELOG.md#v060-2020-03-30)

## Bug Fixes & Corrections

- v0.6.4: Fixed missing `href` type definition in `CellOptions` TypeScript interface (was present in runtime but not declared in types)
- v0.6.5: Fixed truncated href tags in cell rendering
- v0.6.2: Fixed erroneous column truncation when using `colSpan`; corrected cell padding for zero values

**Type imports:** v0.5.1 imported type definitions from `@types/cli-table2` for broader TypeScript compatibility [source](./.skilld/releases/CHANGELOG.md#v051-2018-07-19)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Upgrade to v0.6.2+ for significant performance gains — earlier versions have 800% slower rendering for large tables (1763+ rows). v0.6.2 refactored the layout engine to reduce rendering from 4.5 seconds to 0.5 seconds on typical workloads [source](./.skilld/issues/issue-68.md)

- Use `CellOptions` objects instead of plain strings to unlock advanced per-cell customization including colSpan, rowSpan, alignment (hAlign/vAlign), word-wrap overrides, custom borders, padding, and hyperlinks [source](./.skilld/pkg/index.d.ts:L51:L68)

- Leverage `colSpan` and `rowSpan` for multi-cell layouts — these features enable cells to span multiple columns or rows, supporting complex table designs (though note rendering can be poor with empty border chars as of v0.6.5) [source](./.skilld/releases/v0.6.2.md)

- Pass `wrapOnWordBoundary: true` alongside `wordWrap: true` to break text at word boundaries instead of character boundaries — improves readability when displaying long text or code [source](./.skilld/releases/v0.6.2.md) and can be overridden per-cell [source](./.skilld/releases/v0.6.3.md)

- Use the `href` property on `CellOptions` to create clickable terminal hyperlinks via OSC-8 escape sequences — test URLs carefully as special characters like `debug: true` when troubleshooting table rendering issues — the table collects diagnostic messages accessible via `table.messages` to expose layout problems [source](./.skilld/releases/v0.6.2.md), then call `Table.reset()` between debugging runs [source](./.skilld/pkg/README.md:L170:L185)

- Pass empty string values for `mid`, `left-mid`, `mid-mid`, and `right-mid` in the `chars` config to remove horizontal dividers between rows while retaining column separators [source](./.skilld/pkg/README.md:L130:L145)

- Specify `colWidths` array explicitly to ensure consistent column sizing across renders — leave values as `null` for columns you want sized automatically [source](./.skilld/pkg/index.d.ts:L24)

- Use horizontal tables for row-oriented data (array of arrays) and vertical tables for object-oriented data (array of objects), then switch to cross tables when you need both row and column headers [source](./.skilld/pkg/README.md:L47:L103)

- Strip or encode special characters in `href` URLs to avoid ANSI escape sequence corruption that breaks table layout — URL encoding like %21 for `truncate: '...'` globally in table options to mark truncated content with ellipsis — the truncation engine correctly handles ANSI color escape codes [source](./.skilld/pkg/index.d.ts:L23)

- Use `style.compact: true` and zero padding values (`padding-left: 0, padding-right: 0`) with minimal border chars to produce the most space-efficient output — useful for terminal-constrained environments [source](./.skilld/pkg/README.md:L150:L168)

- Override `wordWrap` and `wrapOnWordBoundary` per-cell via `CellOptions` to mix wrapped and non-wrapped content in the same table [source](./.skilld/releases/v0.6.3.md)
<!-- /skilld:best-practices -->
