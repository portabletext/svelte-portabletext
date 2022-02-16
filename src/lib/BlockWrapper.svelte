<script lang="ts">
  import {assertListItem} from './nestLists'
  import type {BlockProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: BlockProps

  $: block = portableText.block

  $: style =
    block?._type === 'block'
      ? assertListItem(block)
        ? `listItem_${block.listItem}`
        : block.style || 'normal'
      : `list_${block.listItem}`

  $: component = portableText.components?.block?.[style] || undefined
</script>

{#if component}
  <svelte:component this={component} {portableText}>
    <slot />
  </svelte:component>
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
