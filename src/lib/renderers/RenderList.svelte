<script lang="ts">
  import type {ToolkitPortableTextList} from '@portabletext/toolkit'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: ToolkitPortableTextList

  $: ({listItem} = node)
  $: handler = typeof components.list === 'function' ? components.list : components.list[listItem]
  $: listComponent = handler || defaultComponents.list.bullet
</script>

<!-- @TODO: Work on passing the right props -->
<svelte:component this={listComponent} portableText={{value: node}}>
  <slot />
</svelte:component>
