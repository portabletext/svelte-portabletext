<script lang="ts">
  import type {PortableTextBlock} from '@portabletext/types'
  import type {BlockComponentProps, GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: PortableTextBlock
  export let indexInParent: number

  $: ({style = 'normal'} = node)
  $: blockComponent =
    typeof components.block === 'function' ? components.block : components.block[style]
  $: if (!blockComponent) {
    global.missingComponentHandler(style, 'blockStyle')
  }

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: blockProps = (() => {
    return {
      global,
      indexInParent,
      value: node
    } as BlockComponentProps
  })()
</script>

<svelte:component this={blockComponent || components.unknownBlockStyle} portableText={blockProps}>
  <slot />
</svelte:component>
