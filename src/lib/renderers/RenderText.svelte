<script lang="ts">
  import type {ToolkitTextNode} from '@portabletext/toolkit'
  import type {GlobalProps} from '../rendererTypes'

  interface Props {
    global: GlobalProps
    node: ToolkitTextNode
  }

  let {global, node}: Props = $props()
  let {components} = $derived(global)
  let {text} = $derived(node)
</script>

{#if text === '\n'}
  {#if typeof components.hardBreak === 'function'}
    <components.hardBreak />
  {:else}
    {text}
  {/if}
{:else}
  {text}
{/if}
