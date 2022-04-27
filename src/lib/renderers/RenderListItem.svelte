<script lang="ts">
  import type {PortableTextListItemBlock} from '@portabletext/types'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {GlobalProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let node: PortableTextListItemBlock

  $: ({style = 'normal'} = node)
  $: handler =
    typeof components.listItem === 'function' ? components.listItem : components.listItem[style]
  $: listItemComponent = handler || defaultComponents.listItem.bullet
  $: styleComponent = style !== 'normal' ? components.block[style] : undefined
</script>

<!-- @TODO: Work on passing the right props -->
<svelte:component this={listItemComponent} portableText={{value: node}}>
  {#if styleComponent}
    <svelte:component
      this={styleComponent}
      portableText={{
        value: {
          ...node,
          listItem: undefined
        }
      }}
    >
      <slot />
    </svelte:component>
  {:else}
    <slot />
  {/if}
</svelte:component>
