<script lang="ts">
  import {spanToPlainText} from '@portabletext/toolkit'
  import type {ToolkitNestedPortableTextSpan} from '@portabletext/toolkit'
  import type {PortableTextBlock} from '@portabletext/types'
  import type {GlobalProps, MarkComponentProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: ToolkitNestedPortableTextSpan
  export let parentBlock: PortableTextBlock

  $: ({markType} = node)
  $: markComponent = components.marks[markType]
  $: if (!markComponent) {
    global.missingComponentHandler(markType, 'mark')
  }

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: markProps = (() => {
    return {
      global,
      parentBlock,
      markType,
      value: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    } as MarkComponentProps
  })()
</script>

<svelte:component this={markComponent || components.unknownMark} portableText={markProps}>
  <slot />
</svelte:component>
