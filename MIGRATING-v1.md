# Migrating to @portabletext/svelte v1

This document outlines the breaking changes in @portabletext/svelte `v1.0.0` with a guide on how to do the switch.

The goal of the changes is to make the module more ergonomic to use and better aligned with [@portabletext/react](https://www.npmjs.com/package/@portabletext/react). With a shared API and better portability between frameworks, we hope to get closer to PortableText's mission of being extremely portable and presentation-agnostic.

## `PortableText` is now a named import

```js
// Before
import PortableText from '@portabletext/svelte'

// After (`^1.0.0`)
import {PortableText} from '@portabletext/svelte'
```

## `blocks` renamed to `value`

This component renders any Portable Text content or custom object (such as `codeBlock`, `mapLocation` or `callToAction`). As `blocks` is tightly coupled to text blocks, we've renamed the main input to `value`.

```svelte
<!-- From: -->
<PortableText
  blocks={[
    /* ... */
  ]}
/>

<!-- ✅ To: -->
<PortableText
  value={[
    /* ... */
  ]}
/>
```

## `serializers` renamed to `components`

"Serializers" are now named "Components", which should make their role as custom renderers of content more understandable for Svelte developers.

```svelte
<!-- From: -->
<PortableText {/* ... */} serializers={{
  marks: {/* ... */},
  types: {/* ... */},
  // ...
}} />

<!-- ✅ To: -->
<PortableText {/* ... */} components={{
  marks: {/* ... */},
  types: {/* ... */},
  // ...
}} />
```

## `blockStyles` renamed to `block`

When customizing the rendering of text blocks according to their style, previously you'd add the custom components under the `blockStyles`. That property is now renamed to `block`:

```svelte
<!-- From: -->
<PortableText {/* ... */} serializers={{
  blockStyles: {
    normal: CustomParagraph,
    blockquote: Quote,
  },
  // ...
}} />

<!-- ✅ To: -->
<PortableText {/* ... */} components={{
  block: {
    normal: CustomParagraph,
    blockquote: Quote,
  },
  // ...
}} />
```

💡 Bonus: `block` can also be a single Svelte component that is used for all text blocks regardless of their `style`. One example would be the [DefaultBlock.svelte](src/lib/defaultComponents/DefaultBlock.svelte) component this library uses - it handles all default block types.

## Customization of lists' components moved to standalone object

Previously, you'd specify the rendering of lists & list items inside the `blockStyles` value ([now named `blocks`](#blockstyles-renamed-to-block)). Now each have their own top-level property:

```svelte
<!-- From: -->
<PortableText {/* ... */} serializers={{
  blockStyles: {
    list_bullet: UnorderedListWrapper,
    list_number: OrderedListWrapper,
    listItem_bullet: ListItem,
    listItem_number: ListItem,
  },
  // ...
}} />

<!-- ✅ To: -->
<PortableText {/* ... */} components={{
  list: {
    // No more list_ prefix
    bullet: UnorderedListWrapper,
    number: OrderedListWrapper,
  },
  listItem: {
    bullet: ListItem,
    number: ListItem,
  }
  // ...
}} />
```

## Support for custom list types

With the change above, you can also define components for custom lists:

```svelte
<script>
  import {DefaultList} from '@portabletext/svelte'
</script>

<PortableText {/* ... */} components={{
  list: {
    checklist: DefaultList,
  },
  listItem: {
    checklist: ChecklistItem,
  }
  // ...
}} />
```

## Hard breaks rendered properly

`<br>` tags weren't previously rendered when a block would be split between hard breaks stored through `\n` strings (see [#2](https://github.com/portabletext/svelte-portabletext/issues/2)). That's now fixed in v1.

## Default `link` mark renderer

For simple `link` mark annotations with an `href`, `link` or `url` value, the renderer now provides a simplified default renderer.

## Underline marks are now rendered as styled spans

Before, we were rendering them as [`u` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u), which have a different semantic meaning attached to them.

```html
<!-- From: -->
<u>My rendered underline</u>

<!-- ✅ To: -->
<span style="text-decoration:underline;">My rendered underline</span>
```

## Access to `toPlainText` utility

You can now use the provided `toPlainText` utility function to render PortableText in plain strings:

```svelte
<script>
  import {toPlainText} from '@portabletext/svelte'
</>

<svelte:head>
  <meta name="og:description" value={toPlainText(myPortableTextData)} />
</svelte:head>
```

## [Typescript] New types for components' `portableText` prop

Previously, you'd use `BlockProps` and `MarkProps` for custom components in `types` and `blockStyles` ([now named `blocks`](#blockstyles-renamed-to-block)). Now, we have 4 new prop types exposed:

```svelte
<script>
  // From:
  import {BlockProps, MarkProps} from '@portabletext/svelte'

  // ✅ To:
  import {
    BlockComponentProps,
    MarkComponentProps,
    ListComponentProps,
    ListItemComponentProps
  } from '@portabletext/svelte'

  // Example usage:
  export let portableText: BlockComponentProps
</script>
```

## Components' `block|mark` properties renamed to `value`.

Also extends to new `list` and `listItem` components.

```svelte
<script>
  // All component types now receive `value` in portableText
  // you can always safely access `value`
  export let portableText
  $: ({value} = portableText)
</script>
```

## Mark components' `block` property renamed to `parentBlock`.

Marks keep receiving their parent block as a prop, but now under the `parentBlock` key:

```svelte
<!-- Example mark: internal link -->
<script>
  // From:
  import {MarkProps} from '@portabletext/svelte'

  export let portableText: MarkProps<{linkedPageSlug: string}>
  $: ({block} = portableText)

  // ✅ To:
  import {MarkComponentProps} from '@portabletext/svelte'

  export let portableText: MarkComponentProps<{linkedPageSlug: string}>
  $: ({parentBlock} = portableText)

  // Example usage:
  $: siblingLinks = parentBlock.markDefs.filter(
    (def) => def._type == 'internalLink' && def._key !== portableText.mark._key
  )
  $: isSoleLinkInBlock = siblingLinks.length <= 0
</script>
```

This library now uses [@portabletext/toolkit](https://github.com/portabletext/toolkit) to handle its internals. One of the benefits of the toolkit is having
