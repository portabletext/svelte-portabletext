<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import type {PortableTextBlocks, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let blocks: PortableTextBlocks = []
  export let serializers: Serializers = undefined
</script>

{#each blocks as block, index (block._key)}
  {#if serializers?.types?.[block._type]}
    <!-- Custom block-level element -->
    <svelte:component this={serializers.types[block._type]} node={block} {index} {blocks} />
  {:else if block._type === 'block'}
    <BlockRenderer {blocks} {index} {block} {serializers} />
  {:else}
    <ReportError
      message="Block of type {block._type} has no compatible renderer (block {block._key})"
    />
  {/if}
{/each}
