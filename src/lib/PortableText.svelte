<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import nestLists, {LIST_TYPE} from './nestLists'
  import type {PortableTextBlocks} from './ptTypes'
  import type {Serializers} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let blocks: PortableTextBlocks = []
  export let serializers: Serializers = undefined
  export let ignoreUnknownTypes = true

  $: normalizedBlocks = nestLists(blocks)
</script>

{#each normalizedBlocks as block, index (block._key)}
  {#if serializers?.types?.[block._type]}
    <!-- Custom block-level element -->
    <svelte:component
      this={serializers.types[block._type]}
      portableText={{
        _rawBlocks: blocks,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        serializers
      }}
    />
  {:else if block._type === 'block' || block._type === LIST_TYPE}
    <BlockRenderer
      portableText={{
        _rawBlocks: blocks,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        serializers
      }}
    />
  {:else}
    <ReportError
      message="Block of type {block._type} has no compatible renderer (block {block._key})"
      ignoreUnknownTypes={ignoreUnknownTypes || !!serializers?.unknownType}
    />
    {#if serializers?.unknownType}
      <svelte:component
        this={serializers.unknownType}
        portableText={{
          _rawBlocks: blocks,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          serializers
        }}
      />
    {/if}
  {/if}
{/each}
