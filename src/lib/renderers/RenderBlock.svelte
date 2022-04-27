<script lang="ts">
  import type {PortableTextBlock} from '@portabletext/types'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: PortableTextBlock

  $: ({style = 'normal'} = node)
  $: handler = typeof components.block === 'function' ? components.block : components.block[style]
  $: blockComponent = handler || defaultComponents.block.normal
</script>

<!-- @TODO: Work on passing the right props -->
<svelte:component this={blockComponent} portableText={{value: node}}>
  <slot />
</svelte:component>
