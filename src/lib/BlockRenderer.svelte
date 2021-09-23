<script lang="ts">
  import BlockSpan from './BlockSpan.svelte'
  import BlockWrapper from './BlockWrapper.svelte'
  import {BLOCK_LIST_ITEMS, LIST_TYPE} from './nestLists'
  import type {NormalizedBlocks, PortableTextBlocks, PTBlock, PTList, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let index: number
  export let blocks: NormalizedBlocks
  export let _rawBlocks: PortableTextBlocks
  export let block: PTBlock | PTList
  export let serializers: Serializers = undefined
</script>

<BlockWrapper {_rawBlocks} {blocks} {serializers} {index} {block}>
  {#if block._type === 'block'}
    {#each block.children as child (child._key)}
      {#if serializers?.types?.[child._type]}
        <!-- Custom inline element -->
        <svelte:component this={serializers.types[child._type]} {block} node={child} />
      {:else if child._type === 'span'}
        <!-- Regular span / text child -->
        <BlockSpan span={child} {block} {serializers}>{child.text}</BlockSpan>
      {:else}
        <ReportError
          message="Block child of type {child._type} has no compatible renderer (child {child._key} in block {block._key})"
        />
      {/if}
    {/each}
    {#if block[BLOCK_LIST_ITEMS]?.length}
      <BlockWrapper
        {_rawBlocks}
        {blocks}
        {serializers}
        {index}
        block={{
          _type: LIST_TYPE,
          _key: block._key,
          listItem: block.listItem,
          children: block[BLOCK_LIST_ITEMS]
        }}
      >
        {#each block[BLOCK_LIST_ITEMS] as child, nestedIndex (child._key)}
          <svelte:self {_rawBlocks} {blocks} {serializers} index={nestedIndex} block={child} />
        {/each}
      </BlockWrapper>
    {/if}
  {:else if block._type === LIST_TYPE}
    {#each block.children as child, nestedIndex (child._key)}
      <svelte:self {_rawBlocks} {blocks} {serializers} index={nestedIndex} block={child} />
    {/each}
  {/if}
</BlockWrapper>
