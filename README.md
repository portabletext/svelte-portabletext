# [Portable Text](https://portabletext.org) renderer for Svelte

`npm i portable-text-to-svelte -D`

## Usage

```svelte
<script>
  import PortableText from 'portable-text-to-svelte'
</script>

<PortableText
  blocks={[
    // Portable Text array ...
  ]}
/>
```

> 📌 **To keep in mind**: Svelte's SSR mode seems to have issues with whitespace, where it does strip unnecessary space between components. Due to this, marks (formatting, links, etc.) some times are rendered incorrectly.

### Customizing rendering

You can use the `serializers` prop to determine how the renderer should process each block, mark or style type.

```svelte
<PortableText
  blocks={[
    // Portable Text array ...
  ]}
  serializers={{
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
    blockStyles: {
      normal: CustomParagraph,
      blockquote: Quote,
      // Re-using the same component across multiple styles
      h1: CustomHeading,
      h2: CustomHeading,
      h3: CustomHeading,
      // Custom user-defined style
      textCenter: CentralizedText
    }
  }}
/>
```

Example components from above:

```svelte
<!-- UserInfo (block type) -->
<script lang="ts">
  import {session} from '$app/stores'
  import type {BlockProps} from 'portable-text-to-svelte'

  // Property custom blocks receive from portable-text-to-svelte when redered
  export let portableText: BlockProps<{bold?: boolean}>

  $: userName = $session?.user?.name || 'person'
</script>

{#if portableText.block.bold}
  <strong>{userName}</strong>
{:else}
  {userName}
{/if}
```

```svelte
<!-- AbsoluteURL (custom mark) -->
<script lang="ts">
  export let mark: {url?: string; newWindow?: boolean} = {}
  import type {MarkProps} from 'portable-text-to-svelte'

  // Property custom marks receive from portable-text-to-svelte when redered
  export let portableText: MarkProps<{
    url?: string
    newWindow?: boolean
  }>

  // Remember to make your variables reactive so that they can reflect prop changes
  // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: mark = portableText.mark
  $: newWindow = mark.newWindow || false
</script>

{#if mark.url}
  <a href={mark.url} target={newWindow ? '_blank' : undefined}><slot /></a>
{:else}
  <slot />
{/if}
```

```svelte
<!-- CustomHeading (blockStyle) -->
<script lang="ts">
  import type {BlockProps} from 'portable-text-to-svelte'

  export let portableText: BlockProps

  $: index = portableText.index
  $: blocks = portableText.blocks
  $: block = portableText.block

  $: style = block.style
  $: precededByHeading = ['h1', 'h2', 'h3', 'h4', 'h5'].includes(blocks[index - 1]?.style)

  $: anchorId = `heading-${block._key}`
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
    <h2 class="text-xl"><slot /></h2>
  {:else}
    <h4 class="text-lg text-gray-600"><slot /></h4>
  {/if}
</div>
```

The component above is also an example of how you can access blocks surrounding the current one for rule-based design.

## TODO

- [ ] If applicable, add support to `serializers.hardBreak`, similar to block-content-to-react
- [ ] In example site, add examples with custom marks, blockStyles & block types
  - Include a nested PT renderer example
