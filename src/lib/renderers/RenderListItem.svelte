<script lang="ts">
  import type {ToolkitPortableTextListItem} from '@portabletext/toolkit'
  import defaultComponents from '../defaultComponents/defaultComponents'
  import type {GlobalProps, ListItemComponentProps} from '../rendererTypes'

  export let global: GlobalProps
  $: ({components} = global)

  export let options: {
    indexInParent: number
    node: ToolkitPortableTextListItem
  }
  $: ({node, indexInParent} = options)
  $: ({style = 'normal'} = node)

  $: handler =
    typeof components.listItem === 'function' ? components.listItem : components.listItem[style]
  $: listItemComponent = handler || defaultComponents.listItem.bullet
  $: styleComponent = style !== 'normal' ? components.block[style] : undefined

  // Using a function is the only way to use TS in Svelte reactive assignments
  $: listItemProps = (() => {
    return {
      global,
      value: node,
      indexInParent
    } as ListItemComponentProps
  })()
</script>

<svelte:component this={listItemComponent} portableText={listItemProps}>
  {#if styleComponent}
    <svelte:component
      this={styleComponent}
      portableText={{
        // Different props for the block that will hold this list
        ...listItemProps,
        value: {
          ...node,
          // BlockComponentProps shouldn't receive a listItem
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
