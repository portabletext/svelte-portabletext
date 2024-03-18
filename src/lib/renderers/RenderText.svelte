<script lang="ts">
  import type {ToolkitTextNode} from '@portabletext/toolkit'
  import type {GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: ToolkitTextNode
  $: ({text} = node)
</script>

{#if text === '\n'}
  {#if typeof components.hardBreak === 'function'}
    <svelte:component this={components.hardBreak} />
  {:else}
    {text}
  {/if}
{:else}
  {text}
{/if}
