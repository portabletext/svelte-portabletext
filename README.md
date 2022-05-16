# Portable Text renderer for Svelte

Render [Portable Text](https://portabletext.org) block content with [Svelte](https://svelte.dev/) components.

## Usage

`npm i @portabletext/svelte -D`

⚠️ Svelte 3.47.0 or higher is required.

```svelte
<script>
  import {PortableText} from '@portabletext/svelte'
</script>

<PortableText
  value={[
    // Portable Text array ...
  ]}
/>
```

This is enough to get you set-up with basic block content with formatting and text styles. When working with images, custom styles, blocks & marks, though, you'll need to customize your renderer with **components**:

### Customizing rendering

You can use the `components` prop to determine how the renderer should process each block, mark or style type.

```svelte
<PortableText
  value={[
    // Portable Text array ...
  ]}
  components={{
    types: {
      // block-level components
      callout: Callout,
      // inline-level components
      userInfo: UserInfo
    },
    marks: {
      absUrl: AbsoluteURL,
      // Overwrite default mark renderers
      strong: CustomStrong
    },
    block: {
      normal: CustomParagraph,
      blockquote: Quote,
      // Re-using the same component across multiple styles
      h1: CustomHeading,
      h2: CustomHeading,
      h3: CustomHeading,
      // Custom user-defined style
      textCenter: CentralizedText
    },
    list: {
      // Swap only the list parts you need
      bullet: UnorderedListWrapper,
      // Custom user-defined list type
      checklist: ChecklistWrapper
    },
    listItem: {
      bullet: ListItem,
      checklist: ChecklistItem
    }
  }}
/>
```

Example components from above:

```svelte
<!-- UserInfo (custom block type) -->
<script lang="ts">
  import {session} from '$app/stores'
  import type {CustomBlockComponentProps} from '@portabletext/svelte'

  // Property custom blocks receive from @portabletext/svelte when redered
  export let portableText: CustomBlockComponentProps<{bold?: boolean}>

  $: userName = $session?.user?.name || 'person'
</script>

{#if portableText.value.bold}
  <strong>{userName}</strong>
{:else}
  {userName}
{/if}
```

```svelte
<!-- AbsoluteURL (custom mark) -->
<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'

  // Property custom marks receive from @portabletext/svelte when redered
  export let portableText: MarkComponentProps<{
    url?: string
    newWindow?: boolean
  }>

  // Remember to make your variables reactive so that they can reflect prop changes
  // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: ({value} = portableText)
  $: newWindow = value.newWindow || false
</script>

{#if value.url}
  <a href={value.url} target={newWindow ? '_blank' : undefined}>
    <!-- Marks receive children which you can render with Svelte's slots -->
    <slot />
  </a>
{:else}
  <!-- If no valid URL, render only the contents of the mark -->
  <slot />
{/if}
```

> 📌 **To keep in mind**: Svelte's SSR mode seems to have issues with whitespace (see [#3168](https://github.com/sveltejs/svelte/issues/3168)), where it does strip unnecessary space between components. Due to this, marks (formatting, links, etc.) some times are rendered incorrectly. We're tracking this in [#1](https://github.com/portabletext/svelte-portabletext/issues/1).

```svelte
<!-- CustomHeading (blockStyle) -->
<script lang="ts">
  import type {BlockComponentProps} from '@portabletext/svelte'

  export let portableText: BlockComponentProps

  $: ({index, blocks, value} = portableText)
  $: ({style} = block)

  $: precededByHeading = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(blocks[index - 1]?.style)

  $: anchorId = `heading-${value._key}`
</script>

<!-- If preceded by heading, have a higher margin top -->
<div class="relative {precededByHeading ? 'mt-10' : 'mt-4'}" id={anchorId}>
  <a href="#{anchorId}">
    <span class="sr-only">Link to this heading</span>
    🔗
  </a>
  {#if style === 'h1'}
    <h1 class="text-4xl font-black"><slot /></h1>
  {:else if style === 'h2'}
    <h2 class="text-3xl"><slot /></h2>
  {:else if style === 'h3'}
    <h3 class="text-xl"><slot /></h3>
  {:else}
    <h4 class="text-lg text-gray-600"><slot /></h4>
  {/if}
</div>
```

The component above is also an example of how you can access blocks surrounding the current one for rule-based design.

Finally, you can pass **`context`** to your `<PortableText>` component to have custom external data exposed to all components. This is useful in scenarios such as:

- Adding different styles to the same block depending on its placement
- Loading in data from an external source/API
- Running expensive calculations on your `value` only once

Here's a complete example with a `footnote` annotation, where editors focus on writing its contents, and the front-end smartly position it and define its number:

```svelte
<!-- Our page's content -->
<script>
  import Footnote from './Foonote.svelte'

  export let value

  // Get all footnotes from markDefs in top-level value
  $: footnotes = value.reduce((notes, curBlock) => {
    if (curBlock._type !== 'block' || !curBlock.markDefs?.length) {
      return notes
    }
    return [...notes, ...curBlock.markDefs.filter((def) => def._type === 'footnote')]
  }, [])
</script>

<PortableText
  value={value}
  components={{
    marks: {
      footnote: Footnote
    }
  }}
  context={{
    // Pass these footnotes inside the context
    footnotes
  }}
/>

<!-- And render them at the bottom -->
<ol>
  {#each footnotes as note}
    <li id="note-{note._key}">
      <PortableText
        value={note.note}
        components={{
          marks: {
            link: Link
          }
        }}
      />
      <a href="#src-{note._key}">👆</a>
    </li>
  {/each}
</ol>


<!-- Footnote.svelte -->
<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'

  interface FootnoteProps {
    _key: string
    note: PortableTextBlocks
  }

  export let portableText: MarkComponentProps<
    FootnoteProps,
    // Use the second argument to specify your context's type
    {
      footnotes: FootnoteProps[]
    }
  >

  // From the context, let's figure out what's the position of this footnote
  $: number =
    portableText.global.context.footnotes.findIndex((note) => note._key === portableText.value._key) + 1
</script>

<span id="src-{portableText.value._key}">
  <slot /><sup><a href={`#note-${portableText.value._key}`}>{number}</a></sup>
</span>
```

## Disabling warnings / handling unknown types

When the library encounters a block, mark, list or list item with a type that is not known (eg it has no corresponding component in the `components` property), it will by default print a console warning.

To disable this behavior, you can either pass `false` to the `onMissingComponent` property, or give it a custom function you want to use to report the error. For instance:

```jsx
import {PortableText} from '@portabletext/svelte'

<PortableText
  value={[/* array of portable text blocks */]}
  onMissingComponent={false}
/>

// or, pass it a function:

<PortableText
  value={[/* array of portable text blocks */]}
  onMissingComponent={(message, options) => {
    myErrorLogger.report(message, {
      // eg `someUnknownType`
      type: options.type,

      // 'block' | 'mark' | 'blockStyle' | 'listStyle' | 'listItemStyle'
      nodeType: options.nodeType
    })
  }}
/>
```

## Rendering Plain Text

This module also exports a function (`toPlainText()`) that will render one or more Portable Text blocks as plain text. This is helpful in cases where formatted text is not supported, or you need to process the raw text value.

For instance, to render an OpenGraph meta description for a page:

```svelte
<script>
  import {toPlainText} from '@portabletext/svelte'
</script>

<svelte:head>
  <meta name="og:description" value={toPlainText(myPortableTextData)} />
</svelte:head>
```

<!-- ## TODO

- [ ] If applicable, add support to `components.hardBreak`, similar to block-content-to-react
- [ ] In example site, add examples with custom marks, block & block types
  - Include a nested PT renderer example -->

## Credits

Big thanks to [Emma Agering](https://github.com/emagining), [Jacob Størdahl](https://github.com/stordahl), [Ollie Taylor](https://github.com/OllieJT), [Rune](https://github.com/runeh), [Stephane Vanraes](https://github.com/stephane-vanraes) & [Toby Milner-Gulland](https://github.com/tmgulland) (alphabetical order) for working on their custom renderers while we didn't have an official one. You've helped many ship Svelte + Sanity projects!

## License

MIT-licensed. See LICENSE.
