<script lang="ts">
  import {LIST_NEST_MODE_HTML, nestLists, ToolkitListNestMode} from '@portabletext/toolkit'
  import assertBlockKey from './assertBlockKey'
  import defaultComponents from './defaultComponents/defaultComponents'
  import {mergeComponents} from './defaultComponents/mergeComponents'
  import EntriesRenderer from './EntriesRenderer.svelte'
  import type {InputValue, PortableTextSvelteContext} from './ptTypes'
  import type {PortableTextComponents} from './rendererTypes'

  export let input: InputValue = []
  export let components: PortableTextComponents = undefined
  export let ignoreUnknownTypes = true
  export let context: PortableTextSvelteContext = {}

  // @TODO: consider exposing to users
  let listNestingMode: ToolkitListNestMode = LIST_NEST_MODE_HTML

  $: mergedComponents = mergeComponents(defaultComponents, components)
  $: keyedBlocks = (Array.isArray(input) ? input : [input]).map(assertBlockKey)
  $: blocks = nestLists(keyedBlocks, listNestingMode)
</script>

<EntriesRenderer
  components={mergedComponents}
  _rawInput={input}
  {blocks}
  {ignoreUnknownTypes}
  {context}
/>
