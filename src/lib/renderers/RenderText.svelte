<script lang="ts">
  import type {ToolkitTextNode} from '@portabletext/toolkit'
  import type {GlobalProps} from '../rendererTypes'

  type RenderTextProps = {
    global: GlobalProps
    node: ToolkitTextNode
  }

  let {global, node}: RenderTextProps = $props()
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
