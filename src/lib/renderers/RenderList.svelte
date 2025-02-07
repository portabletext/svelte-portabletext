<script lang="ts">
  import type {ToolkitPortableTextList} from '@portabletext/toolkit'
  import type {GlobalProps, ListComponentProps} from '../rendererTypes'
  import type {Snippet} from 'svelte'

  type RenderListProps = {
    global: GlobalProps
    indexInParent: number
    node: ToolkitPortableTextList
    children?: Snippet
  }

  let {global, indexInParent, node, children}: RenderListProps = $props()

  let listComponent = $derived.by(() => {
    const {list} = global.components
    return typeof list === 'function' ? list : list[node.listItem]
  })
  $effect(() => {
    if (!listComponent) {
      global.missingComponentHandler?.(node.listItem, 'listStyle')
    }
  })
  let listProps = $derived<ListComponentProps>({
    global,
    value: node,
    indexInParent
  })

  let ListComponent = $derived(listComponent || components.unknownList)
</script>

<ListComponent portableText={listProps}>
  {@render children?.()}
</ListComponent>
