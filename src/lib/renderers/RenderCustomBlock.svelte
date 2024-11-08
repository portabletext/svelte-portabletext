<script lang="ts">
  import {run} from 'svelte/legacy'

  import type {ArbitraryTypedObject, PortableTextBlock} from '@portabletext/types'
  import type {CustomBlockComponentProps, GlobalProps} from '../rendererTypes'

  interface Props {
    global: GlobalProps
    node: ArbitraryTypedObject
    parentBlock?: PortableTextBlock
    indexInParent: number
    isInline?: boolean
  }

  let {global, node, parentBlock, indexInParent, isInline = false}: Props = $props()

  let {components} = $derived(global)
  let {_type} = $derived(node)
  let customComponent = $derived(components.types[_type])
  run(() => {
    if (!customComponent) {
      global.missingComponentHandler?.(_type, 'block')
    }
  })
  // Using a function is the only way to use TS in Svelte reactive assignments
  let componentProps = $derived(
    (() => {
      return {
        global,
        value: node,
        indexInParent,
        parentBlock,
        isInline
      } as CustomBlockComponentProps
    })()
  )

  const CustomComponent = $derived(customComponent || components.unknownType)
</script>

<CustomComponent portableText={componentProps} />
