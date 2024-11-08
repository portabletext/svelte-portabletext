<script lang="ts">
  import type {ListComponentProps} from '../rendererTypes'

  interface Props {
    portableText: ListComponentProps;
    children?: import('svelte').Snippet;
  }

  let { portableText, children }: Props = $props();

  let {value} = $derived(portableText)

  let {listItem} = $derived(value)
</script>

{#if listItem === 'number'}
  <ol>{@render children?.()}</ol>
{:else}
  <ul>{@render children?.()}</ul>
{/if}
