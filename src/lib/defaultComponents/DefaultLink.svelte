<script lang="ts">
  import type {Snippet} from 'svelte'
  import type {MarkComponentProps} from '../rendererTypes'

  type DefaultLinkProps = {
    portableText: MarkComponentProps
    children?: Snippet
  }

  let {portableText, children}: DefaultLinkProps = $props()

  let href = $derived.by(() => {
    const {href, url, link, value} = portableText.value
    return href || url || link || value
  })
</script>

{#if typeof href === 'string'}
  <a {href}>{@render children?.()}</a>
{:else}
  {@render children?.()}
{/if}
