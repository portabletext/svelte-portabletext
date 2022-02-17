<script lang="ts">
  import type {ListProps} from '../rendererTypes'

  export let portableText: ListProps

  $: ({list} = portableText)

  $: ({listItem} = list)
</script>

{#if listItem === 'number'}
  <ol><slot /></ol>
{:else}
  <ul><slot /></ul>
{/if}
