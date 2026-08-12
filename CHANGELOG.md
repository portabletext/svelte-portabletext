# @portabletext/svelte

## 4.0.0

### Major Changes

- [#195](https://github.com/portabletext/svelte-portabletext/pull/195) [`b32a90f`](https://github.com/portabletext/svelte-portabletext/commit/b32a90ff60c3c7e21c19a4d3a7f86b61757b654e) Thanks [@rexxars](https://github.com/rexxars)! - Lists now nest as deeply as their `level` says they do

  #### When you will see a difference

  Only when your content has a list item that starts deeper than level 1, or that jumps more than one level at a time, such as going straight from level 1 to level 3. Lists that start at level 1 and change one level at a time render exactly as before.

  Portable Text stores list nesting as a flat `level` number on each block, and an editor lets an author produce both of those shapes. Previously the rendered nesting could be shallower than `level` said, and an item returning to a shallower level could start a new list instead of continuing the one it belonged to, which restarts the numbering of an `<ol>`.

  #### What changes

  Two list items, the first at level 3 and the second at level 1, used to render as two unrelated lists:

  ```html
  <ul>
    <li>Level 3</li>
  </ul>
  <ul>
    <li>Level 1</li>
  </ul>
  ```

  They now render as one list, three levels deep, with the second item as a sibling at the top:

  ```html
  <ul>
    <li>
      <ul>
        <li>
          <ul>
            <li>Level 3</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Level 1</li>
  </ul>
  ```

  The levels nobody authored have to be filled with something, and HTML can only put a list inside a list item, so they become empty list items. A browser draws a bullet or a number for each of them.

  #### What you may need to do

  Tests covering lists that start deep or skip levels will need updating.

  If the empty markers are visible somewhere you do not want them, the durable fix is the content itself, since a list skipping from level 1 to level 3 usually means an authoring mistake. To hide them in the meantime, target list items whose only child is a nested list:

  ```css
  li:has(> ul:only-child),
  li:has(> ol:only-child) {
    list-style: none;
  }
  ```

  Note that in an `<ol>` this hides the number but the item still counts, so the numbering of the items after it is unchanged.

- [#195](https://github.com/portabletext/svelte-portabletext/pull/195) [`b32a90f`](https://github.com/portabletext/svelte-portabletext/commit/b32a90ff60c3c7e21c19a4d3a7f86b61757b654e) Thanks [@rexxars](https://github.com/rexxars)! - Node.js 22.12 or later is now required

  This package had no `engines` field before, so nothing was enforced. It now matches the rest of the Portable Text packages.

  Node.js 20 reached end of life in April 2026. If you build or server-render on Node.js 20, upgrade to 22.12 or later before taking this version.

## 3.0.1

### Patch Changes

- [`d2776ae`](https://github.com/portabletext/svelte-portabletext/commit/d2776ae9dba31e7f58ccd5cafeb6497c6603fba3) Thanks [@stipsan](https://github.com/stipsan)! - update @portabletext/toolkit to ^2.0.18

## [3.0.0](https://github.com/portabletext/svelte-portabletext/compare/v2.1.12...v3.0.0) (2025-02-07)

### ⚠ BREAKING CHANGES

- migrate to Svelte 5 (#145)

### Features

- migrate to Svelte 5 ([#145](https://github.com/portabletext/svelte-portabletext/issues/145)) ([6f17aaf](https://github.com/portabletext/svelte-portabletext/commit/6f17aaf46b1a2e82fb62c3cc4888394b370bef3b))

## [2.1.12](https://github.com/portabletext/svelte-portabletext/compare/v2.1.11...v2.1.12) (2025-02-06)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.17 ([#148](https://github.com/portabletext/svelte-portabletext/issues/148)) ([a623255](https://github.com/portabletext/svelte-portabletext/commit/a62325512bc67b9e5ab5e4a9ed58f6202e78e339))

## [2.1.11](https://github.com/portabletext/svelte-portabletext/compare/v2.1.10...v2.1.11) (2024-04-11)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.15 ([#126](https://github.com/portabletext/svelte-portabletext/issues/126)) ([bacdf2d](https://github.com/portabletext/svelte-portabletext/commit/bacdf2d237b4968b63a5802650fc146619e191af))

## [2.1.10](https://github.com/portabletext/svelte-portabletext/compare/v2.1.9...v2.1.10) (2024-04-05)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.14 ([#117](https://github.com/portabletext/svelte-portabletext/issues/117)) ([dee4fc0](https://github.com/portabletext/svelte-portabletext/commit/dee4fc033b66706153186946bed3a3cb9dd8a491))

## [2.1.9](https://github.com/portabletext/svelte-portabletext/compare/v2.1.8...v2.1.9) (2024-04-05)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.13 ([#112](https://github.com/portabletext/svelte-portabletext/issues/112)) ([404773b](https://github.com/portabletext/svelte-portabletext/commit/404773b86c74e7ae3bd31247e2fdc34e93571559))

## [2.1.8](https://github.com/portabletext/svelte-portabletext/compare/v2.1.7...v2.1.8) (2024-04-05)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.12 ([#103](https://github.com/portabletext/svelte-portabletext/issues/103)) ([6e5d0e9](https://github.com/portabletext/svelte-portabletext/commit/6e5d0e911644b6283904aa654ddf22602c87f704))

## [2.1.7](https://github.com/portabletext/svelte-portabletext/compare/v2.1.6...v2.1.7) (2024-03-18)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.11 ([#98](https://github.com/portabletext/svelte-portabletext/issues/98)) ([7f32812](https://github.com/portabletext/svelte-portabletext/commit/7f328128538fd7cf109c6763aa87c5de46b1243a))

## [2.1.6](https://github.com/portabletext/svelte-portabletext/compare/v2.1.5...v2.1.6) (2024-03-16)

### Bug Fixes

- export InputValue from the package ([#84](https://github.com/portabletext/svelte-portabletext/issues/84)) ([504f797](https://github.com/portabletext/svelte-portabletext/commit/504f797295c1c15c3048da79e18eea213394aead))

## [2.1.5](https://github.com/portabletext/svelte-portabletext/compare/v2.1.4...v2.1.5) (2023-12-14)

### Bug Fixes

- package.json exports default condition should be the last one ([#77](https://github.com/portabletext/svelte-portabletext/issues/77)) ([97ced63](https://github.com/portabletext/svelte-portabletext/commit/97ced6339db7d44bc46742dda2e521a13717b4ba))

## [2.1.4](https://github.com/portabletext/svelte-portabletext/compare/v2.1.3...v2.1.4) (2023-10-20)

### Bug Fixes

- **deps:** update dependency @portabletext/toolkit to ^2.0.10 ([#64](https://github.com/portabletext/svelte-portabletext/issues/64)) ([383ef78](https://github.com/portabletext/svelte-portabletext/commit/383ef78173165f86ecd150299742ade94206d42c))

## [2.1.3](https://github.com/portabletext/svelte-portabletext/compare/v2.1.2...v2.1.3) (2023-09-27)

### Bug Fixes

- add path to types ([35dc3a2](https://github.com/portabletext/svelte-portabletext/commit/35dc3a26e2f73abcf82d72f1e7b04cc59575ff35))

## [2.1.2](https://github.com/portabletext/svelte-portabletext/compare/v2.1.1...v2.1.2) (2023-09-27)

### Bug Fixes

- correct default export ([#57](https://github.com/portabletext/svelte-portabletext/issues/57)) ([c3d7b5e](https://github.com/portabletext/svelte-portabletext/commit/c3d7b5eda53b38d7f6923f0fe7c1f4fbee5063d6))

## [2.1.1](https://github.com/portabletext/svelte-portabletext/compare/v2.1.0...v2.1.1) (2023-08-25)

### Bug Fixes

- **deps:** lock file maintenance ([#48](https://github.com/portabletext/svelte-portabletext/issues/48)) ([75dfaba](https://github.com/portabletext/svelte-portabletext/commit/75dfaba83102949e2e8b5c91e84f75aac17941c1))
- **deps:** update dependency @portabletext/toolkit to ^2.0.8 ([#41](https://github.com/portabletext/svelte-portabletext/issues/41)) ([edd5f8f](https://github.com/portabletext/svelte-portabletext/commit/edd5f8f8ca25e8977009b4e0c9e212b6f4e7c8b9))

## [2.1.0](https://github.com/portabletext/svelte-portabletext/compare/v2.0.0...v2.1.0) (2023-08-24)

### Features

- add Svelte 4 support ([#32](https://github.com/portabletext/svelte-portabletext/issues/32)) ([25c7fcd](https://github.com/portabletext/svelte-portabletext/commit/25c7fcd0e13156115506ec66d0a7a394b3805906))

## [2.0.0](https://github.com/portabletext/to-html/compare/v1.0.1...v2.0.0) (2023-02-21)

### ⚠ BREAKING CHANGES

- ESM/CommonJS compatibility is now improved, but may cause new behavior
  in certain contexts. It should however be more forward-compatible, and allow usage in
  a wider range of tools and environments.
