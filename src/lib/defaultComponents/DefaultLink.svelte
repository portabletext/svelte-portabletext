<script lang="ts">
  import type {Snippet} from 'svelte'
  import type {MarkComponentProps} from '../rendererTypes'

  type DefaultLinkProps = {
    portableText: MarkComponentProps
    children?: Snippet
  }

  let {portableText, children}: DefaultLinkProps = $props()

  let {value} = $derived(portableText)
  let href = $derived(value?.href || value?.url || value?.link || value?.value)
</script>

{#if typeof href === 'string'}
  <a {href}>{@render children?.()}</a>
{:else}
  {@render children?.()}
{/if}
