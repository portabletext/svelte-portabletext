<script lang="ts">
  import type {MarkComponentProps} from '../rendererTypes'
  import DefaultLink from './DefaultLink.svelte'

  export let portableText: MarkComponentProps

  $: ({mark} = portableText)
</script>

{#if mark === 'strong'}
  <strong>
    <slot />
  </strong>
{:else if mark === 'em'}
  <em>
    <slot />
  </em>
{:else if mark === 'code'}
  <code>
    <slot />
  </code>
{:else if mark === 'underline'}
  <span style="text-decoration:underline;">
    <slot />
  </span>
{:else if mark === 'strike-through'}
  <del>
    <slot />
  </del>
{:else}
  <slot />
{/if}
