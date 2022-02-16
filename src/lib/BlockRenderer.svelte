<script lang="ts">
  import BlockSpan from './BlockSpan.svelte'
  import BlockWrapper from './BlockWrapper.svelte'
  import {BLOCK_LIST_ITEMS, LIST_TYPE} from './nestLists'
  import type {BlockProps} from './rendererTypes'
  import ReportError from './ReportError.svelte'

  export let portableText: BlockProps

  $: ({block, components} = portableText)
</script>

<BlockWrapper {portableText}>
  {#if block._type === 'block'}
    {#each block.children as child (child._key)}
      {#if components?.types?.[child._type]}
        <!-- Custom inline element -->
        <svelte:component
          this={components.types[child._type]}
          portableText={{...portableText, parentBlock: block, block: child}}
        />
      {:else if child._type === 'span'}
        <!-- Regular span / text child -->
        <BlockSpan
          portableText={{
            parentBlock: block,
            components,
            ignoreUnknownTypes: portableText.ignoreUnknownTypes,
            span: child,
            context: portableText.context
          }}>{child.text}</BlockSpan
        >
      {:else}
        <ReportError
          message="Block child of type {child._type} has no compatible renderer (child {child._key} in block {block._key})"
        />
      {/if}
    {/each}

    <!-- List items containing nested lists -->
    {#if block[BLOCK_LIST_ITEMS]?.length}
      <svelte:self
        portableText={{
          ...portableText,
          block: {
            _type: LIST_TYPE,
            _key: block._key,
            listItem: block.listItem,
            children: block[BLOCK_LIST_ITEMS]
          }
        }}
      />
    {/if}
  {:else if block._type === LIST_TYPE}
    {#each block.children as child, nestedIndex (child._key)}
      <svelte:self portableText={{...portableText, index: nestedIndex, block: child}} />
    {/each}
  {/if}
</BlockWrapper>
