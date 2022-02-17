<script lang="ts">
  import {isPortableTextListItemBlock} from '@portabletext/toolkit'
  import type {BlockComponentProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: BlockComponentProps

  $: ({value, components} = portableText)

  $: isListItem = isPortableTextListItemBlock(value)
  $: style = isListItem ? value.listItem : value.style || 'normal'
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
  <ReportError message="Style {style} has no compatible renderer (block {value._key})" />
{/if}
