<script lang="ts">
  import type {ListComponentProps} from '../rendererTypes'

  export let portableText: ListComponentProps

  $: ({list} = portableText)

  $: ({listItem} = list)
</script>

{#if listItem === 'number'}
  <ol><slot /></ol>
{:else}
  <ul><slot /></ul>
{/if}
