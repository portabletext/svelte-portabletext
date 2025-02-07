<script lang="ts">
  import type {Snippet} from 'svelte'
  import type {ListComponentProps} from '../rendererTypes'

  type DefaultListProps = {
    portableText: ListComponentProps
    children?: Snippet
  }

  let {portableText, children}: DefaultListProps = $props()

  let {value} = $derived(portableText)

  let {listItem} = $derived(value)
</script>

{#if listItem === 'number'}
  <ol>{@render children?.()}</ol>
{:else}
  <ul>{@render children?.()}</ul>
{/if}
