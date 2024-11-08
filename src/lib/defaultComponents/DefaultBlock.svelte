<script lang="ts">
  import type {BlockComponentProps} from '../rendererTypes'

  interface Props {
    portableText: BlockComponentProps;
    children?: import('svelte').Snippet;
  }

  let { portableText, children }: Props = $props();

  let {value} = $derived(portableText)

  let style = $derived(value.style || 'normal')
</script>

{#if ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].includes(style)}
  <svelte:element this={style}>{@render children?.()}</svelte:element>
{:else if style === 'normal'}
  <p>{@render children?.()}</p>
{:else}
  {@render children?.()}
{/if}
