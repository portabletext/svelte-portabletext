<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import nestLists, {LIST_TYPE} from './nestLists'
  import type {PortableTextBlocks, PTContext} from './ptTypes'
  import type {PortableTextSvelteComponents} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let input: PortableTextBlocks = []
  export let components: PortableTextSvelteComponents = undefined
  export let ignoreUnknownTypes = true
  export let context: PTContext = {}

  $: normalizedBlocks = nestLists(input)
</script>

{#each normalizedBlocks as block, index (block._key)}
  {#if components?.types?.[block._type]}
    <!-- Custom block-level element -->
    <svelte:component
      this={components.types[block._type]}
      portableText={{
        _rawBlocks: input,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        components,
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
        components,
        context
      }}
    />
  {:else}
    <ReportError
      message="Block of type {block._type} has no compatible renderer (block {block._key})"
      ignoreUnknownTypes={ignoreUnknownTypes || !!components?.unknownType}
    />
    {#if components?.unknownType}
      <svelte:component
        this={components.unknownType}
        portableText={{
          _rawBlocks: input,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          components,
          context
        }}
      />
    {/if}
  {/if}
{/each}
