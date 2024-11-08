<script lang="ts">
  import type {MarkComponentProps} from '../rendererTypes'

  interface Props {
    portableText: MarkComponentProps;
    children?: import('svelte').Snippet;
  }

  let { portableText, children }: Props = $props();

  let {value} = $derived(portableText)
  let href = $derived(value?.href || value?.url || value?.link || value?.value)
</script>

{#if typeof href === 'string'}
  <a {href}>{@render children?.()}</a>
{:else}
  {@render children?.()}
{/if}
