<script lang="ts">
  import {run} from 'svelte/legacy'

  import {spanToPlainText} from '@portabletext/toolkit'
  import type {ToolkitNestedPortableTextSpan} from '@portabletext/toolkit'
  import type {PortableTextBlock} from '@portabletext/types'
  import type {GlobalProps, MarkComponentProps} from '../rendererTypes'

  interface Props {
    global: GlobalProps
    node: ToolkitNestedPortableTextSpan
    parentBlock?: PortableTextBlock
    children?: import('svelte').Snippet
  }

  let {global, node, parentBlock, children}: Props = $props()

  let {components} = $derived(global)
  let {markType} = $derived(node)
  let markComponent = $derived(components.marks[markType])
  run(() => {
    if (!markComponent) {
      global.missingComponentHandler?.(markType, 'mark')
    }
  })
  // Using a function is the only way to use TS in Svelte reactive assignments
  let markProps = $derived.by(() => {
    return {
      global,
      parentBlock,
      markType,
      value: node.markDef,
      markKey: node.markKey,
      plainTextContent: spanToPlainText(node)
    } as MarkComponentProps
  })

  const SvelteComponent = $derived(markComponent || components.unknownMark)
</script>

<SvelteComponent portableText={markProps}>
  {@render children?.()}
</SvelteComponent>
