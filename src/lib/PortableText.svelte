<script lang="ts">
  import {LIST_NEST_MODE_HTML, nestLists} from '@portabletext/toolkit'
  import assertBlockKey from './assertBlockKey'
  import defaultComponents from './defaultComponents/defaultComponents'
  import {mergeComponents} from './defaultComponents/mergeComponents'
  import EntriesRenderer from './EntriesRenderer.svelte'
  import type {InputValue, PortableTextSvelteContext} from './ptTypes'
  import type {PortableTextComponents} from './rendererTypes'

  export let value: InputValue = []
  export let components: PortableTextComponents = undefined
  export let ignoreUnknownTypes = true
  export let context: PortableTextSvelteContext = {}

  $: mergedComponents = mergeComponents(defaultComponents, components)
  $: keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey)
  $: blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML)
</script>

<EntriesRenderer
  components={mergedComponents}
  _rawInput={value}
  {blocks}
  {ignoreUnknownTypes}
  {context}
/>
