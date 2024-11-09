<script lang="ts">
  import type {PortableTextBlock} from '@portabletext/types'
  import type {BlockComponentProps, GlobalProps} from '../rendererTypes'
  import type {Snippet} from 'svelte'

  type RenderBlockProps = {
    global: GlobalProps
    node: PortableTextBlock
    indexInParent: number
    children?: Snippet
  }

  let {global, node, indexInParent, children}: RenderBlockProps = $props()

  let {components} = $derived(global)
  let {style = 'normal'} = $derived(node)
  let blockComponent = $derived(
    typeof components.block === 'function' ? components.block : components.block[style]
  )
  $effect(() => {
    if (!blockComponent) {
      global.missingComponentHandler?.(style, 'blockStyle')
    }
  })

  let blockProps = $derived.by(() => {
    return {
      global,
      indexInParent,
      value: node
    } as BlockComponentProps
  })

  let BlockComponent = $derived(blockComponent || components.unknownBlockStyle)
</script>

<BlockComponent portableText={blockProps}>
  {@render children?.()}
</BlockComponent>
