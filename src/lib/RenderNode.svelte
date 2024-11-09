<script lang="ts">
  import RenderNode from './RenderNode.svelte'
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

  type RenderNodeProps = {
    global: GlobalProps
    options: {
      indexInParent: number
      node: GenericNode
      parentBlock?: PortableTextBlock
      isInline?: boolean
    }
  }

  let {global, options}: RenderNodeProps = $props()
  let {node, indexInParent, parentBlock, isInline} = $derived(options)
</script>

{#if isPortableTextToolkitList(node)}
  <RenderList {node} {indexInParent} {global}>
    {#each node.children as child, childIndex}
      <RenderNode
        options={{
          node: child,
          indexInParent: childIndex,
          // The list's children will be parsed as PortableTextListItem, which will pass the proper parentBlock & isInline
          parentBlock: undefined,
          isInline: undefined
        }}
        {global}
      />
    {/each}
  </RenderList>
{:else if isPortableTextListItemBlock(node)}
  <RenderListItem {node} {indexInParent} {global}>
    {#each buildMarksTree(node) as child, childIndex}
      <RenderNode
        options={{
          // Pass the current listItem as a parentBlock
          parentBlock: node,
          node: child,
          isInline: true,
          indexInParent: childIndex
        }}
        {global}
      />
    {/each}
  </RenderListItem>
{:else if isPortableTextToolkitSpan(node)}
  <RenderSpan {node} {parentBlock} {global}>
    {#each node.children as child, childIndex}
      <RenderNode
        options={{
          parentBlock,
          node: child,
          isInline: true,
          indexInParent: childIndex
        }}
        {global}
      />
    {/each}
  </RenderSpan>
{:else if isPortableTextBlock(node)}
  <RenderBlock {node} {indexInParent} {global}>
    {#each buildMarksTree(node) as child, childIndex}
      <RenderNode
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
{:else if node}
  <RenderCustomBlock {node} {parentBlock} {indexInParent} {isInline} {global} />
{/if}
