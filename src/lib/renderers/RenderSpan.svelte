<script lang="ts">
  import {spanToPlainText, ToolkitNestedPortableTextSpan} from '@portabletext/toolkit'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {PortableTextSvelteComponents} from '../rendererTypes'

  export let node: ToolkitNestedPortableTextSpan
  export let components: PortableTextSvelteComponents

  $: ({markType, markDef, markKey} = node)
  $: markComponent = components.marks[markType] || defaultComponents.marks[markType]
</script>

{#if markComponent}
  <!-- @TODO: Work on passing the right props -->
  <svelte:component
    this={markComponent}
    portableText={{
      mark: markDef || markType,
      plainText: spanToPlainText(node),
      markDef,
      markKey,
      markType
    }}
  >
    <slot />
  </svelte:component>
{:else}
  <slot />
{/if}
