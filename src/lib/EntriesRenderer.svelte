<script lang="ts">
  import BlockRenderer from './BlockRenderer.svelte'
  import {LIST_TYPE} from './constants'
  import ListRenderer from './ListRenderer.svelte'
  import type {InputValue, NormalizedBlocks, PortableTextSvelteContext} from './ptTypes'
  import type {PortableTextSvelteComponents} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let _rawInput: InputValue = []
  export let ignoreUnknownTypes: boolean = true
  export let context: PortableTextSvelteContext = {}
  export let blocks: NormalizedBlocks = []
  export let components: PortableTextSvelteComponents = undefined
</script>

{#each blocks as entry, index (entry._key)}
  {#if entry._type === LIST_TYPE}
    <ListRenderer
      portableText={{
        _rawInput,
        blocks,
        index,
        /* @ts-ignore */
        list: entry,
        ignoreUnknownTypes,
        components,
        context
      }}
    />
  {:else if components?.types?.[entry._type]}
    <!-- Custom block-level element -->
    <svelte:component
      this={components.types[entry._type]}
      portableText={{
        _rawInput,
        blocks,
        index,
        block: entry,
        ignoreUnknownTypes,
        components,
        context
      }}
    />
  {:else if entry._type === 'block'}
    <BlockRenderer
      portableText={{
        _rawInput,
        blocks,
        index,
        /* @ts-ignore */
        block: entry,
        ignoreUnknownTypes,
        components,
        context
      }}
    />
  {:else}
    <ReportError
      message="Block of type {entry._type} has no compatible renderer (block {entry._key})"
      ignoreUnknownTypes={ignoreUnknownTypes || !!components?.unknownType}
    />
    {#if components?.unknownType}
      <svelte:component
        this={components.unknownType}
        portableText={{
          _rawInput,
          blocks,
          index,
          block: entry,
          ignoreUnknownTypes,
          components,
          context
        }}
      />
    {/if}
  {/if}
{/each}
