<script lang="ts">
  import {
    buildMarksTree,
    isPortableTextBlock,
    isPortableTextListItemBlock,
    isPortableTextToolkitList,
    isPortableTextToolkitSpan,
    isPortableTextToolkitTextNode
  } from '@portabletext/toolkit'
  import type {InputValue, NormalizedBlocks, PortableTextSvelteContext} from './ptTypes'
  import type {PortableTextSvelteComponents} from './rendererTypes'
  import RenderText from './renderers/RenderText.svelte'
  import RenderBlock from './renderers/RenderBlock.svelte'
  import RenderSpan from './renderers/RenderSpan.svelte'
  import RenderListItem from './renderers/RenderListItem.svelte'
  import RenderList from './renderers/RenderList.svelte'
  import RenderCustomBlock from './renderers/RenderCustomBlock.svelte'

  export let options: {
    // Global Context
    components: PortableTextSvelteComponents
    _rawPtValue: InputValue
    context: PortableTextSvelteContext
    ignoreUnknownTypes?: boolean

    // Undecided
    blocks: NormalizedBlocks
    isInline?: boolean

    // Specific
    node: NormalizedBlocks[0]
    nodeIndex: number
  }
  $: ({node, components} = options)
</script>

{#if isPortableTextToolkitList(node)}
  <RenderList {node} {components}>
    {#each node.children as child, childIndex}
      <svelte:self
        options={{
          ...options,
          node: child,
          isInline: false,
          index: childIndex
        }}
      />
    {/each}
  </RenderList>
{:else if isPortableTextListItemBlock(node)}
  <RenderListItem {node} {components}>
    {#each buildMarksTree(node) as child, childIndex}
      <svelte:self
        options={{
          ...options,
          node: child,
          isInline: false,
          index: childIndex
        }}
      />
    {/each}
  </RenderListItem>
{:else if isPortableTextToolkitSpan(node)}
  <RenderSpan {node} {components}>
    {#each node.children as child, childIndex}
      <svelte:self
        options={{
          ...options,
          node: child,
          isInline: false,
          index: childIndex
        }}
      />
    {/each}
  </RenderSpan>
{:else if isPortableTextBlock(node)}
  <RenderBlock {node} {components}>
    {#each buildMarksTree(node) as child, childIndex}
      <svelte:self
        options={{
          ...options,
          node: child,
          isInline: false,
          index: childIndex
        }}
      />
    {/each}
  </RenderBlock>
{:else if isPortableTextToolkitTextNode(node)}
  <RenderText {node} {components} />
{:else}
  <RenderCustomBlock {node} {components} />
{/if}
