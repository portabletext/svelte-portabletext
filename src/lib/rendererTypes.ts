import type {ToolkitPortableTextList} from '@portabletext/toolkit'
import type {
  PortableTextBlock,
  PortableTextBlockStyle,
  PortableTextListItemBlock,
  PortableTextListItemType,
  PortableTextSpan,
  PortableTextMarkDefinition,
  ArbitraryTypedObject
} from '@portabletext/types'
import type {SvelteComponentTyped} from 'svelte'
import type {
  InputValue,
  NormalizedBlocks,
  PortableTextMarkType,
  PortableTextSvelteContext
} from './ptTypes'

export type CustomStyles =
  | Record<PortableTextBlockStyle, BlockComponent | undefined>
  | BlockComponent

export type CustomMarks = Record<PortableTextMarkType, MarkComponent>

export type CustomTypes = Record<string, BlockComponent>

export interface PortableTextSvelteComponents {
  marks: CustomMarks
  types: CustomTypes

  /**
   * Object of Svelte components that renders blocks with different `style` properties.
   *
   * The object has the shape `{styleName: SvelteComponent}`, where `styleName` is the value set
   * in individual `style` attributes on blocks.
   *
   * Can also be set to a single Svelte component, which would handle block styles of _any_ type.
   */
  block: CustomStyles

  /**
   * Object of Svelte components used to render lists of different types (bulleted vs numbered,
   * for instance, which by default is `<ul>` and `<ol>`, respectively)
   *
   * There is no actual "list" node type in the Portable Text specification, but a series of
   * list item blocks with the same `level` and `listItem` properties will be grouped into a
   * virtual one inside of this library.
   *
   * Can also be set to a single Svelte component, which would handle lists of _any_ type.
   */
  list: Record<PortableTextListItemType, ListComponent | undefined> | ListComponent

  /**
   * Object of Svelte components used to render different list item styles.
   *
   * The object has the shape `{listItemType: SvelteComponent}`, where `listItemType` is the value
   * set in individual `listItem` attributes on blocks.
   *
   * Can also be set to a single Svelte component, which would handle list items of _any_ type.
   */
  listItem: Record<PortableTextListItemType, ListItemComponent | undefined> | ListItemComponent

  /* eslint-disable */
  /**
   * Override the default component for blocks of unknown type, if ignoreUnknownTypes is set to false.
   */
  unknownType?: BlockComponent
  /**
   * Override the default component for marks of unknown type. Defaults to rendering its content without a container.
   */
  unknownMark?: MarkComponent
  /* eslint-enable */
}

export type PortableTextComponents = Partial<PortableTextSvelteComponents>

interface CommonProps<ContextType = PortableTextSvelteContext> {
  ignoreUnknownTypes?: boolean
  components: PortableTextSvelteComponents
  context: ContextType
}

export interface BlockProps<BlockType = PortableTextBlock, ContextType = PortableTextSvelteContext>
  extends CommonProps<ContextType> {
  index: number
  blocks: NormalizedBlocks
  _rawInput: InputValue
  block: BlockType
  /**
   * Exclusive to inline blocks.
   */
  parentBlock?: PortableTextBlock
}

export type ListItemProps<ContextType = PortableTextSvelteContext> = BlockProps<
  PortableTextListItemBlock,
  ContextType
>
export interface ListProps<ContextType = PortableTextSvelteContext>
  extends Omit<BlockProps<ToolkitPortableTextList, ContextType>, 'block'> {
  list: ToolkitPortableTextList & {
    listItem: PortableTextListItemType
  }
}

/**
 * Used solely by BlockSpan, not exposed to end-user
 */
export interface SpanProps<ContextType = PortableTextSvelteContext>
  extends CommonProps<ContextType> {
  parentBlock: PortableTextBlock
  span: ArbitraryTypedObject | PortableTextSpan
}

export interface MarkProps<
  MarkType = string | PortableTextMarkDefinition,
  ContextType = PortableTextSvelteContext
> extends SpanProps<ContextType> {
  mark: MarkType
}

export type PortableTextMarkComponent = SvelteComponentTyped<{
  portableText: MarkProps
}>

// Unfortunately Svelte components don't play nicely with Typescript,
// so we need to `| any` all of these types
export type BlockComponent =
  | SvelteComponentTyped<{
      portableText: BlockProps
    }>
  | any

export type MarkComponent = PortableTextMarkComponent | any

export type SpanComponent =
  | SvelteComponentTyped<{
      portableText: SpanProps
    }>
  | any

export type ListComponent =
  | SvelteComponentTyped<{
      portableText: ListProps
    }>
  | any

export type ListItemComponent =
  | SvelteComponentTyped<{
      portableText: ListItemProps
    }>
  | any
