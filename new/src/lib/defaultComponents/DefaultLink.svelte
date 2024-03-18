<script lang="ts">
  import type {MarkComponentProps} from '../rendererTypes'

  export let portableText: MarkComponentProps

  $: ({value} = portableText)
  $: href = value?.href || value?.url || value?.link || value?.value
</script>

{#if typeof href === 'string'}
  <a {href}><slot /></a>
{:else}
  <slot />
{/if}
