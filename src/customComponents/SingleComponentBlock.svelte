<script lang="ts">
  import type {BlockComponentProps} from '$lib/rendererTypes'

  type Props = {
    portableText: BlockComponentProps
    children?: import('svelte').Snippet
  }

  let {portableText, children}: Props = $props()

  let {value} = $derived(portableText)
  let {style = 'normal'} = $derived(value)
</script>

<div style:background="papayawhip">
  <em style:color="#888">I was rendered from a single `components.block` Svelte component</em>
  {#if style === 'h1'}
    <h1>{@render children?.()}</h1>
  {:else if style === 'h2'}
    <h2>{@render children?.()}</h2>
  {:else if style === 'h3'}
    <h3>{@render children?.()}</h3>
  {:else if style === 'h4'}
    <h4>{@render children?.()}</h4>
  {:else if style === 'h5'}
    <h5>{@render children?.()}</h5>
  {:else if style === 'h6'}
    <h6>{@render children?.()}</h6>
  {:else if style === 'blockquote'}
    <blockquote>{@render children?.()}</blockquote>
  {:else if style === 'normal'}
    <p>{@render children?.()}</p>
  {:else}
    {@render children?.()}
  {/if}
</div>
