<script lang="ts">
  import type {MarkComponentProps} from '../rendererTypes'

  export let portableText: MarkComponentProps

  $: ({mark} = portableText)
  $: href = typeof mark !== 'string' && (mark?.href || mark?.url || mark?.link || mark?.value)
</script>

{#if typeof href === 'string'}
  <a {href}><slot /></a>
{:else}
  <slot />
{/if}
