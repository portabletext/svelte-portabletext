<script lang="ts">
  import type {MarkComponentProps} from '../rendererTypes'

  export let portableText: MarkComponentProps

  $: ({markDef} = portableText)
  $: href = markDef?.href || markDef?.url || markDef?.link || markDef?.value
</script>

{#if typeof href === 'string'}
  <a {href}><slot /></a>
{:else}
  <slot />
{/if}
