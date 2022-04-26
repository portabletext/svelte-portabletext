<script lang="ts">
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {PortableTextBlock} from '@portabletext/types'
  import type {PortableTextSvelteComponents} from '../rendererTypes'

  export let node: PortableTextBlock
  export let components: PortableTextSvelteComponents

  $: ({style = 'normal'} = node)
  $: handler = typeof components.block === 'function' ? components.block : components.block[style]
  $: blockComponent = handler || defaultComponents.block.normal
</script>

<!-- @TODO: Work on passing the right props -->
<svelte:component this={blockComponent} portableText={{value: node}}>
  <slot />
</svelte:component>
