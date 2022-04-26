<script lang="ts">
  import {LIST_NEST_MODE_HTML, nestLists} from '@portabletext/toolkit'
  import assertBlockKey from './assertBlockKey'
  import defaultComponents from './defaultComponents/defaultComponents'
  import {mergeComponents} from './defaultComponents/mergeComponents'
  import type {InputValue, PortableTextSvelteContext} from './ptTypes'
  import type {PortableTextComponents} from './rendererTypes'
  import RenderNode from './RenderNode.svelte'

  export let value: InputValue = []
  export let components: PortableTextComponents = undefined
  export let ignoreUnknownTypes = true
  export let context: PortableTextSvelteContext = {}

  $: mergedComponents = mergeComponents(defaultComponents, components)
  $: keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey)
  $: blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML)
</script>

{#each blocks as node, index (node._key)}
  <RenderNode
    options={{
      node,
      components: mergedComponents,
      ignoreUnknownTypes,
      context,
      blocks,
      _rawPtValue: value,
      isInline: false,
      nodeIndex: index
    }}
  />
{/each}
