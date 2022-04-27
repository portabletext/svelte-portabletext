<script lang="ts">
  import type {ArbitraryTypedObject, PortableTextBlock} from '@portabletext/types'
  import type {CustomBlockComponentProps, GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: ArbitraryTypedObject
  export let parentBlock: PortableTextBlock
  export let indexInParent: number
  export let isInline = false

  $: ({_type} = node)
  $: customComponent = components.types[_type]

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: componentProps = (() => {
    return {
      global,
      value: node,
      indexInParent,
      parentBlock,
      isInline
    } as CustomBlockComponentProps
  })()
</script>

{#if typeof customComponent === 'function'}
  <svelte:component this={customComponent} portableText={componentProps} />
{/if}
