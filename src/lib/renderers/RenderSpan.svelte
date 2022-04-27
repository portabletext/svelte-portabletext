<script lang="ts">
  import {spanToPlainText, ToolkitNestedPortableTextSpan} from '@portabletext/toolkit'
  import type {PortableTextBlock} from '@portabletext/types'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {GlobalProps, MarkComponentProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: ToolkitNestedPortableTextSpan
  export let parentBlock: PortableTextBlock

  $: ({markType} = node)
  $: markComponent = components.marks[markType] || defaultComponents.marks[markType]

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: markProps = (() => {
    return {
      ...global,
      parentBlock,
      markType,
      markDef: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    } as MarkComponentProps
  })()
</script>

{#if markComponent}
  <svelte:component this={markComponent} portableText={markProps}>
    <slot />
  </svelte:component>
{:else}
  <slot />
{/if}
