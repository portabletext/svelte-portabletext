<script lang="ts">
  import type {Snippet} from 'svelte'
  import type {MarkComponentProps} from '../rendererTypes'

  type DefaultMarkProps = {
    portableText: MarkComponentProps
    children?: Snippet
  }

  let {portableText, children}: DefaultMarkProps = $props()

  let {markType} = $derived(portableText)
</script>

{#if markType === 'strong'}
  <strong>
    {@render children?.()}
  </strong>
{:else if markType === 'em'}
  <em>
    {@render children?.()}
  </em>
{:else if markType === 'code'}
  <code>
    {@render children?.()}
  </code>
{:else if markType === 'underline'}
  <span style="text-decoration:underline;">
    {@render children?.()}
  </span>
{:else if markType === 'strike-through'}
  <del>
    {@render children?.()}
  </del>
{:else}
  {@render children?.()}
{/if}
