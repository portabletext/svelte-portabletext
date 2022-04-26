<script lang="ts">
  import type {ToolkitTextNode} from '@portabletext/toolkit'

  import type {PortableTextSvelteComponents} from '../rendererTypes'

  export let node: ToolkitTextNode
  export let components: PortableTextSvelteComponents

  $: ({text} = node)
</script>

{#if text === '\n'}
  {#if typeof components.hardBreak === 'function'}
    <svelte:component this={components.hardBreak} />
  {:else if components.hardBreak !== false}
    <br />
  {:else}
    {text}
  {/if}
{:else}
  {text}
{/if}
