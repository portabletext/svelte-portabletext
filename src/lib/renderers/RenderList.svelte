<script lang="ts">
  import type {ToolkitPortableTextList} from '@portabletext/toolkit'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {GlobalProps, ListComponentProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let options: {
    indexInParent: number
    node: ToolkitPortableTextList
  }

  $: ({node, indexInParent} = options)
  $: ({listItem} = node)
  $: handler = typeof components.list === 'function' ? components.list : components.list[listItem]
  $: listComponent = handler || defaultComponents.list.bullet

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: listProps = (() => {
    return {
      global,
      value: node,
      indexInParent
    } as ListComponentProps
  })()
</script>

<svelte:component this={listComponent} portableText={listProps}>
  <slot />
</svelte:component>
