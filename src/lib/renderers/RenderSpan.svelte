<script lang="ts">
  import {spanToPlainText} from '@portabletext/toolkit'
  import type {ToolkitNestedPortableTextSpan} from '@portabletext/toolkit'
  import type {PortableTextBlock} from '@portabletext/types'
  import type {GlobalProps, MarkComponentProps} from '../rendererTypes'
  import type {Snippet} from 'svelte'

  type RenderSpanProps = {
    global: GlobalProps
    node: ToolkitNestedPortableTextSpan
    parentBlock?: PortableTextBlock
    children?: Snippet
  }

  let {global, node, parentBlock, children}: RenderSpanProps = $props()

  let markComponent = $derived(global.components.marks[node.markType])
  $effect(() => {
    if (!markComponent) {
      global.missingComponentHandler?.(node.markType, 'mark')
    }
  })

  let markProps = $derived<MarkComponentProps>({
    global,
    parentBlock,
    markType: node.markType,
    // @ts-expect-error @TODO
    value: node.markDef,
    markKey: node.markKey,
    plainTextContent: spanToPlainText(node)
  })

  let MarkComponent = $derived(markComponent || components.unknownMark)
</script>

<MarkComponent portableText={markProps}>
  {@render children?.()}
</MarkComponent>
