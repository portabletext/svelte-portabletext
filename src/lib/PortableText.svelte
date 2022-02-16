<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import defaultComponents from './defaultComponents/defaultComponents'
  import {mergeComponents} from './defaultComponents/mergeComponents'
  import nestLists, {LIST_TYPE} from './nestLists'
  import type {PortableTextBlocks, PTContext} from './ptTypes'
  import type {PortableTextComponents} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let input: PortableTextBlocks = []
  export let components: PortableTextComponents = undefined
  export let ignoreUnknownTypes = true
  export let context: PTContext = {}

  $: mergedComponents = mergeComponents(defaultComponents, components)

  $: normalizedBlocks = nestLists(input)
</script>

{#each normalizedBlocks as block, index (block._key)}
  {#if components?.types?.[block._type]}
    <!-- Custom block-level element -->
    <svelte:component
      this={components.types[block._type]}
      portableText={{
        _rawInput: input,
        blocks: normalizedBlocks,
        index,
        block,
        ignoreUnknownTypes,
        components: mergedComponents,
        context
      }}
    />
  {:else if block._type === 'block' || block._type === LIST_TYPE}
    <BlockRenderer
      portableText={{
        _rawInput: input,
        blocks: normalizedBlocks,
        index,
        /* @ts-ignore */
        block,
        ignoreUnknownTypes,
        components: mergedComponents,
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
          _rawInput: input,
          blocks: normalizedBlocks,
          index,
          block,
          ignoreUnknownTypes,
          components: mergedComponents,
          context
        }}
      />
    {/if}
  {/if}
{/each}
