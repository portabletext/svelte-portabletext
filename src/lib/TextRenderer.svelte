<script lang="ts">
  import type {PortableTextSvelteComponents} from './rendererTypes'

  export let text: string
  export let components: PortableTextSvelteComponents

  $: lines = text.split('\n')
</script>

{#if typeof text === 'string'}
  {#each lines as line, index}
    {line}{#if index < lines.length - 1 && components.hardBreak !== false}
      {#if typeof components.hardBreak === 'function'}
        <svelte:component this={components.hardBreak} />
      {:else}
        <br />
      {/if}
    {/if}
  {/each}
{/if}
