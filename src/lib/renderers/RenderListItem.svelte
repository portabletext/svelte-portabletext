<script lang="ts">
  import type {ToolkitPortableTextListItem} from '@portabletext/toolkit'
  import type {BlockComponent, GlobalProps, ListItemComponentProps} from '../rendererTypes'
  import type {Snippet} from 'svelte'
  import type {PortableTextBlockStyle} from '@portabletext/types'

  type Props = {
    global: GlobalProps
    indexInParent: number
    node: ToolkitPortableTextListItem
    children?: Snippet
  }

  let {global, indexInParent, node, children}: Props = $props()

  let {components} = $derived(global)
  let style = $derived<PortableTextBlockStyle>(node.style ?? 'normal')
  let listItemComponent = $derived(
    typeof components.listItem === 'function' ? components.listItem : components.listItem[style]
  )
  $effect(() => {
    if (!listItemComponent) {
      global.missingComponentHandler?.(style, 'listItemStyle')
    }
  })
  let StyleComponent = $derived<BlockComponent | undefined>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style !== 'normal' ? (components.block as any)[style] : undefined
  )

  let listItemProps = $derived<ListItemComponentProps>({
    global,
    value: node,
    indexInParent
  })

  let ListItemComponent = $derived(listItemComponent || components.unknownListItem)
</script>

<ListItemComponent portableText={listItemProps}>
  {#if StyleComponent}
    <StyleComponent
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
      {@render children?.()}
    </StyleComponent>
  {:else}
    {@render children?.()}
  {/if}
</ListItemComponent>
