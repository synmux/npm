---
name: chalk-animation-skilld
description: "ALWAYS use when writing code importing \"chalk-animation\". Consult for debugging, best practices, or modifying chalk-animation, chalk animation."
metadata:
  version: 2.0.3
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-06-26
---

# bokub/chalk-animation `chalk-animation@2.0.3`
**Tags:** latest: 2.0.3

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p chalk-animation` instead of grepping `.skilld/` directories. Run `skilld search --guide -p chalk-animation` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- BREAKING: ESM module system — v2.0.0 requires ES Module imports (`import chalkAnimation from 'chalk-animation'`), no CommonJS support. Previously supported `require()` [source](./.skilld/releases/v2.0.0.md)

- BREAKING: Node.js >=12 minimum — v2.0.0 dropped support for Node.js versions older than 12. If targeting older Node versions, remain on v1.6.0 [source](./.skilld/releases/v2.0.0.md)

- NEW: `karaoke` animation effect — added in v1.6.0, highlights text as it "plays" character by character. Use `chalkAnimation.karaoke(text, speed)` [source](./.skilld/releases/v1.6.0.md)

- NEW: `frame()` method for manual rendering — added in v1.3.0, returns the next frame's rendered output without displaying it. Allows programmatic frame access: `const nextFrame = animation.frame(); console.log(nextFrame);` [source](./.skilld/releases/v1.3.0.md)

- NEW: `render()` method for frame display — added in v1.3.0, manually renders and displays the current frame. Use with `.stop()` to control animation timing manually [source](./.skilld/releases/v1.3.0.md)

- NEW: `replace(text)` method — added in v1.2.0, seamlessly changes the animated text without restarting the animation. Example: `animation.replace('new text')` [source](./.skilld/releases/v1.2.0.md)

- NEW: Multi-line animation support — added in v1.5.0, animations now correctly handle strings containing newlines. Text is split on `\r\n`, `\r`, or `\n` and each line is animated independently [source](./.skilld/releases/v1.5.0.md)

**Also changed:** CLI `--speed` flag added v1.4.0 · CLI `--duration` flag added v1.4.0
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Always pass string input to animation methods — the library expects strings and will throw `str.split is not a function` if passed non-string values like the return value of `process.stdout.write()` [source](./.skilld/pkg/index.js#L134)

- Provide speed as a number greater than 0, typically between 0.5 and 2 — speed acts as a divisor on animation frame delays, so values <= 0 throw an error and very high values make animations difficult to read [source](./.skilld/pkg/index.js#L128:L131)

- Leverage automatic animation start for immediate visual feedback — created animations start automatically after a brief delay, so no explicit `start()` call is needed unless you've previously called `stop()` [source](./.skilld/pkg/index.js#L171:L175)

- Use `stop()` and `start()` for pause/resume without losing the animation instance — these methods preserve frame state, allowing smooth playback control without recreating the animation object [source](./.skilld/pkg/index.js#L161:L168)

- Call `replace(newText)` to seamlessly update animated text — this is preferable to creating a new animation, as it preserves the running animation state and frame counter [source](./.skilld/pkg/index.js#L156:L159)

- Manually render frames with `render()` or retrieve frame content with `frame()` when you need non-automatic rendering — this allows frame-by-frame control for custom display logic or testing [source](./.skilld/pkg/index.js#L139:L155)

- Be aware that any `console.log`, `console.info`, `console.warn`, or `console.error` call will automatically stop the current animation — this is by design to prevent animation text from interfering with explicit logging, but can affect multi-animation workflows [source](./.skilld/pkg/index.js#L14:L20)

- Use different animations for different visual moods: `rainbow` (hue rotation), `pulse` (red/white breathing), `glitch` (chaotic scrambling), `radar` (sweeping glow), `neon` (bold flicker), `karaoke` (progressive reveal) [source](./.skilld/pkg/index.js#L25:L122)

- Adjust speed based on animation type — faster animations like glitch (55ms) benefit from lower speeds (0.5–1), while slower animations like neon (500ms) can tolerate higher speeds [source](./.skilld/pkg/index.js#L185:L192)

- Use the CLI `--duration` flag in non-interactive scripts or demos to automatically stop after N milliseconds, preventing runaway animations in automated contexts [source](./.skilld/pkg/cli.js#L40:L43)

- For multi-line text, provide newline-delimited strings — the animation preserves line breaks and re-renders all lines together, maintaining text structure [source](./.skilld/pkg/index.js#L134:L135)

- Store animation instances in variables when you need later control — the object exposes `stop()`, `start()`, `replace()`, `frame()`, and `render()` methods for programmatic manipulation [source](./.skilld/pkg/index.js#L152:L169)

- Rely on gradient-string integration in built-in effects for smooth colour transitions — the `rainbow` and `pulse` effects use gradient interpolation to create smooth hue changes without manual colour management [source](./.skilld/pkg/index.js#L26:L30)
<!-- /skilld:best-practices -->
