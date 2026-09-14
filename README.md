# `@synmux/npm`

> Because every developer needs a metapackage that does almost nothing, but does it with style.

Metapackage for syn.

It's a package. For syn. By syn. About syn. If you were expecting more, well, that's on you.

With thanks - and apologies - to [@zachleat](https://github.com/zachleat).

---

## Table of Contents

- [`@synmux/npm`](#synmuxnpm)
  - [Table of Contents](#table-of-contents)
  - [Why?](#why)
  - [Usage](#usage)
    - [CLI](#cli)
    - [Programmatic](#programmatic)
  - [Development](#development)
  - [Incoming](#incoming)
  - [Changelog](#changelog)
  - [License](#license)
  - [Just show me the output](#just-show-me-the-output)

---

## Why?

![it is a mystery](assets/mystery.webp)

## Usage

### CLI

```sh
npx @synmux/npm
```

Needs Node 24 or newer. Bun is no longer required, or indeed involved.

### Programmatic

> For those who want to automate their disappointment.

First, install the package:

```bash
npm install @synmux/npm
```

Then you can pull it in to your heart's content:

```js
import syn from "@synmux/npm";

syn();
```

Or, if you're still clinging to CommonJS:

```js
const { default: syn } = await import("@synmux/npm");

syn();
```

## Development

- Written in **TypeScript**, because more code is more better.
- Runs on **Node 24** with `pnpm`, because `bun` broke enough.
- Bundled with `esbuild` and tested (no, really) with `vitest`.
- Linted with `biome`, because someone has to care about code style.
- **For detailed codebase documentation, see [AGENTS.md](AGENTS.md)**.

If you want to contribute, ask yourself: why?

## Incoming

Believe it or not, features are planned!

- `--cv` / `-c` parameter to dump out my CV.
- Fetching links (and CV, when implemented) from [my personal API](https://github.com/synmux/syn-horse).
  - There will always be a static fallback.
- Literally anything useful.

## Changelog

- `1.0.1` First release! May angels rejoice.
- `1.0.2` Minor dependency bump and twiddle to remove Node from `engines`.
- `1.0.3` _yanked_
- `1.0.4` _yanked_
- `1.0.5` _yanked_
- `1.0.6` Add pronouns to the output and update Docker pins.
- `1.0.7` Rebrand from `dave.io` to `@synmux/npm`; the binary is now `synmux`.
- `1.0.8` **(current)** Tidy `package.json` metadata and move CI to Node 24.
- _Unreleased_ Drop Bun for Node 24, pnpm, vitest and esbuild. Node 24 is now required.

## License

MIT.

Because you should be free to do whatever you want with this, including ignoring it entirely.

## Just show me the output

Oh, alright then.

![Output](assets/npm.webp)
