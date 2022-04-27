<script lang="ts">
  import type {PortableTextBlock} from '@portabletext/types'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {BlockComponentProps, GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: PortableTextBlock
  export let indexInParent: number

  $: ({style = 'normal'} = node)
  $: handler = typeof components.block === 'function' ? components.block : components.block[style]
  $: blockComponent = handler || defaultComponents.block.normal

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: blockProps = (() => {
    return {
      global,
      indexInParent,
      value: node
    } as BlockComponentProps
  })()
</script>

<svelte:component this={blockComponent} portableText={blockProps}>
  <slot />
</svelte:component>
