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

  let {components} = $derived(global)
  let {listItem} = $derived(node)
  let handler = $derived(
    typeof components.list === 'function' ? components.list : components.list[listItem]
  )
  let listComponent = $derived(handler)
  $effect(() => {
    if (!listComponent) {
      global.missingComponentHandler?.(listItem, 'listStyle')
    }
  })
  // Using a function is the only way to use TS in Svelte reactive assignments
  let listProps = $derived.by<ListComponentProps>(() => ({
    global,
    value: node,
    indexInParent
  }))

  let ListComponent = $derived(listComponent || components.unknownList)
</script>

<ListComponent portableText={listProps}>
  {@render children?.()}
</ListComponent>
