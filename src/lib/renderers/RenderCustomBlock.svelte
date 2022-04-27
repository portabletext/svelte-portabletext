<script lang="ts">
  import type {ArbitraryTypedObject} from '@portabletext/types'
  import type {GlobalProps, PortableTextSvelteComponents} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: ArbitraryTypedObject

  $: ({_type} = node)
  $: customComponent = typeof components.types[_type]
</script>

{#if customComponent}
  <!-- @TODO: Work on passing the right props -->
  <svelte:component this={customComponent} portableText={{value: node}}>
    <slot />
  </svelte:component>
{:else}
  <slot />
{/if}
