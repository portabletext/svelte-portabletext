<script lang="ts">
  import type {MarkProps} from '../rendererTypes'

  export let portableText: MarkProps

  $: mark = portableText.mark
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
  <u>
    <slot />
  </u>
{:else if mark === 'strike-through'}
  <s>
    <slot />
  </s>
{:else if typeof mark !== 'string' && mark._type === 'link' && typeof mark.href === 'string'}
  <a href={mark.href}><slot /></a>
{:else}
  <slot />
{/if}
