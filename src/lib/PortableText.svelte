<script lang="ts">
  import {LIST_NEST_MODE_HTML, nestLists} from '@portabletext/toolkit'
  import assertBlockKey from './assertBlockKey'
  import defaultComponents from './defaultComponents/defaultComponents'
  import {mergeComponents} from './defaultComponents/mergeComponents'
  import type {InputValue, PortableTextSvelteContext} from './ptTypes'
  import type {MissingComponentHandler, NodeType, PortableTextComponents} from './rendererTypes'
  import RenderNode from './RenderNode.svelte'
  import {getWarningMessage, printWarning} from './warnings'

  export let value: InputValue = []

  /**
   * Svelte components used to render portable text.
   * This is an object with user-defined components merged with native ones.
   */
  export let components: PortableTextComponents

  /**
   * User-defined data context, as passed to the `<PortableText>` component.
   */
  export let context: PortableTextSvelteContext = {}

  /**
   * Function to call when encountering unknown unknown types, eg blocks, marks,
   * block style, list styles without an associated Svelte component.
   *
   * Will print a warning message to the console by default.
   * Pass `false` to disable.
   */
  export let onMissingComponent: MissingComponentHandler | boolean = true

  $: mergedComponents = mergeComponents(defaultComponents, components)
  $: keyedBlocks = (Array.isArray(value) ? value : [value]).map(assertBlockKey)
  $: blocks = nestLists(keyedBlocks, LIST_NEST_MODE_HTML)
  $: missingComponentHandler = (type: string, nodeType: NodeType) => {
    if (onMissingComponent === false) {
      return
    }

    const message = getWarningMessage(type, nodeType)
    if (typeof onMissingComponent === 'function') {
      onMissingComponent(message, {type, nodeType})
      return
    }

    printWarning(message)
  }
</script>

{#each blocks as node, index (node._key)}
  <RenderNode
    global={{
      components: mergedComponents,
      missingComponentHandler,
      context,
      ptBlocks: blocks,
      ptRawValue: value
    }}
    options={{
      node,
      isInline: false,
      indexInParent: index
    }}
  />
{/each}
