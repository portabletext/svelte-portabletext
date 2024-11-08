<script lang="ts">
  import {run} from 'svelte/legacy'

  import type {ToolkitPortableTextList} from '@portabletext/toolkit'
  import type {GlobalProps, ListComponentProps} from '../rendererTypes'

  interface Props {
    global: GlobalProps
    indexInParent: number
    node: ToolkitPortableTextList
    children?: import('svelte').Snippet
  }

  let {global, indexInParent, node, children}: Props = $props()

  let {components} = $derived(global)
  let {listItem} = $derived(node)
  let handler = $derived(
    typeof components.list === 'function' ? components.list : components.list[listItem]
  )
  let listComponent = $derived(handler)
  run(() => {
    if (!listComponent) {
      global.missingComponentHandler?.(listItem, 'listStyle')
    }
  })
  // Using a function is the only way to use TS in Svelte reactive assignments
  let listProps = $derived(
    (() => {
      return {
        global,
        value: node,
        indexInParent
      } as ListComponentProps
    })()
  )

  const SvelteComponent = $derived(listComponent || components.unknownList)
</script>

<SvelteComponent portableText={listProps}>
  {@render children?.()}
</SvelteComponent>
