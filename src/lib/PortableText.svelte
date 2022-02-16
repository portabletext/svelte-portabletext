<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import nestLists, {LIST_TYPE} from './nestLists'
  import type {PortableTextBlocks, PTContext} from './ptTypes'
  import type {Serializers} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let input: PortableTextBlocks = []
  export let serializers: Serializers = undefined
  export let ignoreUnknownTypes = true
  export let context: PTContext = {}

  $: normalizedBlocks = nestLists(input)
</script>

{#each normalizedBlocks as block, index (block._key)}
  {#if serializers?.types?.[block._type]}
    <!-- Custom block-level element -->
    <svelte:component
      this={serializers.types[block._type]}
      portableText={{
        _rawBlocks: input,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        serializers,
        context
      }}
    />
  {:else if block._type === 'block' || block._type === LIST_TYPE}
    <BlockRenderer
      portableText={{
        _rawBlocks: input,
        blocks: normalizedBlocks,
        index,
        /* @ts-ignore */
        block,
        ignoreUnknownTypes,
        serializers,
        context
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
          _rawBlocks: input,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          serializers,
          context
        }}
      />
    {/if}
  {/if}
{/each}
