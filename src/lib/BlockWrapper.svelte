<script lang="ts">
  import {isPortableTextListItemBlock} from '@portabletext/toolkit'
  import type {BlockProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: BlockProps

  $: ({block, components} = portableText)

  $: isListItem = isPortableTextListItemBlock(block)
  $: style = isListItem ? block.listItem : block.style || 'normal'
  $: componentsObject = isListItem ? components.listItem : components.block

  $: isSingleComponent = typeof componentsObject === 'function'
  // If `block` is a single Svelte component instead of an object of components, use it as the component to render.
  $: component = isSingleComponent ? componentsObject : componentsObject?.[style] || undefined
</script>

{#if component}
  <svelte:component this={component} {portableText}>
    <slot />
  </svelte:component>
{:else}
  <ReportError message="Style {style} has no compatible renderer (block {block._key})" />
{/if}
