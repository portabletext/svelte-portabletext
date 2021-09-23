<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import nestLists, {LIST_TYPE} from './nestLists'
  import type {PortableTextBlocks, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let blocks: PortableTextBlocks = []
  export let serializers: Serializers = undefined

  $: normalizedBlocks = nestLists(blocks)
</script>

{#each normalizedBlocks as block, index (block._key)}
  {#if serializers?.types?.[block._type]}
    <!-- Custom block-level element -->
    <svelte:component
      this={serializers.types[block._type]}
      node={block}
      {index}
      _rawBlocks={blocks}
      blocks={normalizedBlocks}
    />
  {:else if block._type === 'block' || block._type === LIST_TYPE}
    <BlockRenderer _rawBlocks={blocks} blocks={normalizedBlocks} {index} {block} {serializers} />
  {:else}
    <ReportError
      message="Block of type {block._type} has no compatible renderer (block {block._key})"
    />
  {/if}
{/each}
