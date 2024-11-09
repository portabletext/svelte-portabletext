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

  let {components} = $derived(global)
  let {markType} = $derived(node)
  let markComponent = $derived(components.marks[markType])
  $effect(() => {
    if (!markComponent) {
      global.missingComponentHandler?.(markType, 'mark')
    }
  })

  let markProps = $derived.by<MarkComponentProps>(() => ({
    global,
    parentBlock,
    markType,
    // @ts-expect-error @TODO
    value: node.markDef,
    markKey: node.markKey,
    plainTextContent: spanToPlainText(node)
  }))

  let MarkComponent = $derived(markComponent || components.unknownMark)
</script>

<MarkComponent portableText={markProps}>
  {@render children?.()}
</MarkComponent>
