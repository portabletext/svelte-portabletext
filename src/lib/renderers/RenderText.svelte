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
  let HardBreak = $derived(components.hardBreak)
</script>

{#if text === '\n'}
  {#if HardBreak}
    <HardBreak />
  {:else}
    {text}
  {/if}
{:else}
  {text}
{/if}
