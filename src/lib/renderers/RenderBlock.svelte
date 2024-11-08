<script lang="ts">
  import {run} from 'svelte/legacy'

  import type {PortableTextBlock} from '@portabletext/types'
  import type {BlockComponentProps, GlobalProps} from '../rendererTypes'

  interface Props {
    global: GlobalProps
    node: PortableTextBlock
    indexInParent: number
    children?: import('svelte').Snippet
  }

  let {global, node, indexInParent, children}: Props = $props()

  let {components} = $derived(global)
  let {style = 'normal'} = $derived(node)
  let blockComponent = $derived(
    typeof components.block === 'function' ? components.block : components.block[style]
  )
  run(() => {
    if (!blockComponent) {
      global.missingComponentHandler?.(style, 'blockStyle')
    }
  })
  // Using a function is the only way to use TS in Svelte reactive assignments
  let blockProps = $derived(
    (() => {
      return {
        global,
        indexInParent,
        value: node
      } as BlockComponentProps
    })()
  )

  const SvelteComponent = $derived(blockComponent || components.unknownBlockStyle)
</script>

<SvelteComponent portableText={blockProps}>
  {@render children?.()}
</SvelteComponent>
