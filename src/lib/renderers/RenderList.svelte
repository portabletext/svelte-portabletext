<script lang="ts">
  import type {ToolkitPortableTextList} from '@portabletext/toolkit'
  import type {GlobalProps, ListComponentProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let indexInParent: number
  export let node: ToolkitPortableTextList
  $: ({listItem} = node)

  $: handler = typeof components.list === 'function' ? components.list : components.list[listItem]
  $: listComponent = handler
  $: if (!listComponent) {
    global.missingComponentHandler(listItem, 'listStyle')
  }

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: listProps = (() => {
    return {
      global,
      value: node,
      indexInParent
    } as ListComponentProps
  })()
</script>

<svelte:component this={listComponent || components.unknownList} portableText={listProps}>
  <slot />
</svelte:component>
