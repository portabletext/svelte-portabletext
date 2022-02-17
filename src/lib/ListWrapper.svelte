<script lang="ts">
  import type {ListProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: ListProps

  $: ({list, components} = portableText)

  $: isSingleComponent = typeof components?.list === 'function'
  // If `list` is a single Svelte component instead of an object of components, use it as the component to render.
  $: component = isSingleComponent
    ? components.list
    : components?.list?.[list?.listItem] || undefined
</script>

{#if component}
  <svelte:component this={component} {portableText}>
    <slot />
  </svelte:component>
{:else}
  <ReportError message="List {list?.listItem} has no compatible renderer (block {list._key})" />
{/if}
