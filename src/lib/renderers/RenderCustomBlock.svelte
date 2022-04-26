<script lang="ts">
  import type {TypedObject} from '@portabletext/types'
  import type {PortableTextSvelteComponents} from '../rendererTypes'

  export let node: TypedObject
  export let components: PortableTextSvelteComponents

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
