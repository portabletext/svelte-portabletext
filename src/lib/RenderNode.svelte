<script lang="ts">
  import {
    buildMarksTree,
    isPortableTextBlock,
    isPortableTextListItemBlock,
    isPortableTextToolkitList,
    isPortableTextToolkitSpan,
    isPortableTextToolkitTextNode
  } from '@portabletext/toolkit'
  import type {PortableTextBlock} from '@portabletext/types'
  import type {GenericNode} from './ptTypes'
  import RenderBlock from './renderers/RenderBlock.svelte'
  import RenderCustomBlock from './renderers/RenderCustomBlock.svelte'
  import RenderList from './renderers/RenderList.svelte'
  import RenderListItem from './renderers/RenderListItem.svelte'
  import RenderSpan from './renderers/RenderSpan.svelte'
  import RenderText from './renderers/RenderText.svelte'
  import type {GlobalProps} from './rendererTypes'

  export let global: GlobalProps
  export let options: {
    indexInParent: number
    node: GenericNode
    parentBlock?: PortableTextBlock
    isInline?: boolean
  }
  $: ({node, indexInParent, parentBlock} = options)
</script>

{#if isPortableTextToolkitList(node)}
  <RenderList
    options={{
      node,
      indexInParent
    }}
    {global}
  >
    {#each node.children as child, childIndex}
      <svelte:self
        options={{
          node: child,
          indexInParent: childIndex,
          // The list's children will be parsed as PortableTextBlocks, which will pass the proper parentBlock & isInline
          parentBlock: undefined,
          isInline: undefined
        }}
        {global}
      />
    {/each}
  </RenderList>
{:else if isPortableTextListItemBlock(node)}
  <RenderListItem {node} {global}>
    {#each buildMarksTree(node) as child, childIndex}
      <svelte:self
        options={{
          // @TODO: pass the current listItem as a parentBlock?
          parentBlock,
          node: child,
          // @TODO: is this the right isInline? What are we rendering as children here?
          isInline: undefined,
          indexInParent: childIndex
        }}
        {global}
      />
    {/each}
  </RenderListItem>
{:else if isPortableTextToolkitSpan(node)}
  <RenderSpan {node} {global} {parentBlock}>
    {#each node.children as child, childIndex}
      <svelte:self
        options={{
          parentBlock,
          node: child,
          // @TODO: is this the right isInline? What are we rendering as children here?
          isInline: undefined,
          indexInParent: childIndex
        }}
        {global}
      />
    {/each}
  </RenderSpan>
{:else if isPortableTextBlock(node)}
  <RenderBlock {node} {global}>
    {#each buildMarksTree(node) as child, childIndex}
      <svelte:self
        options={{
          parentBlock: node,
          node: child,
          isInline: true,
          indexInParent: childIndex
        }}
        {global}
      />
    {/each}
  </RenderBlock>
{:else if isPortableTextToolkitTextNode(node)}
  <RenderText {node} {global} />
{:else}
  <RenderCustomBlock {node} {global} />
{/if}