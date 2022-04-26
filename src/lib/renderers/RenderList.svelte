<script lang="ts">
  import type {ToolkitPortableTextList} from '@portabletext/toolkit'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {PortableTextSvelteComponents} from '../rendererTypes'

  export let node: ToolkitPortableTextList
  export let components: PortableTextSvelteComponents

  $: ({listItem} = node)
  $: handler = typeof components.list === 'function' ? components.list : components.list[listItem]
  $: listComponent = handler || defaultComponents.list.bullet
</script>

<!-- @TODO: Work on passing the right props -->
<svelte:component this={listComponent} portableText={{value: node}}>
  <slot />
</svelte:component>
