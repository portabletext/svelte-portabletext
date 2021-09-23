<script lang="ts">
  import {assertListItem} from './nestLists'

  import type {NormalizedBlocks, PortableTextBlocks, PTBlock, PTList, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let index: number
  export let blocks: NormalizedBlocks
  export let _rawBlocks: PortableTextBlocks
  export let block: PTBlock | PTList
  export let serializers: Serializers = undefined

  $: style =
    block?._type === 'block'
      ? assertListItem(block)
        ? `listItem_${block.listItem}`
        : block.style || 'normal'
      : `list_${block.listItem}`

  $: customStyle = serializers?.blockStyles?.[style] || undefined
</script>

{#if customStyle}
  <svelte:component this={customStyle} node={block} {index} {_rawBlocks} {blocks}>
    <slot />
  </svelte:component>
{:else if style === 'h1'}
  <h1><slot /></h1>
{:else if style === 'h2'}
  <h2><slot /></h2>
{:else if style === 'h3'}
  <h3><slot /></h3>
{:else if style === 'h4'}
  <h4><slot /></h4>
{:else if style === 'h5'}
  <h5><slot /></h5>
{:else if style === 'h6'}
  <h6><slot /></h6>
{:else if style === 'blockquote'}
  <blockquote><slot /></blockquote>
{:else if style === 'normal'}
  <p><slot /></p>
{:else if style === 'list_bullet'}
  <ul><slot /></ul>
{:else if style === 'list_number'}
  <ol><slot /></ol>
{:else if style === 'listItem_bullet'}
  <li><slot /></li>
{:else if style === 'listItem_number'}
  <li><slot /></li>
{:else}
  <ReportError message="Style {style} has no compatible renderer (block {block._key})" />
{/if}
