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
  /**
   * Object of Svelte components that renders different types of objects that might appear
   * both as part of the blocks array, or as inline objects _inside_ of a block,
   * alongside text spans.
   *
   * Use the `parentBlock` property to check whether or not this is an inline object or a block
   *
   * The object has the shape `{typeName: SvelteComponent}`, where `typeName` is the value set
   * in individual `_type` attributes.
   */
  types: CustomTypes

  /**
   * Object of Svelte components that renders different types of marks that might appear in spans.
   *
   * The object has the shape `{markName: SvelteComponent}`, where `markName` is the value set
   * in individual `_type` attributes, values being stored in the parent blocks `markDefs`.
   */
  marks: CustomMarks

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

  /**
   * Component to use for rendering "hard breaks", eg `\n` inside of text spans
   * Will by default render a `<br />`. Pass `false` to render as-is (`\n`)
   */
  hardBreak: SvelteComponentTyped<never> | any | false

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

export interface BlockComponentProps<
  BlockType = PortableTextBlock,
  ContextType = PortableTextSvelteContext
> extends CommonProps<ContextType> {
  index: number
  blocks: NormalizedBlocks
  _rawInput: InputValue
  block: BlockType
  /**
   * Exclusive to inline blocks.
   */
  parentBlock?: PortableTextBlock
  isInline: true
}

export type ListItemComponentProps<ContextType = PortableTextSvelteContext> = BlockComponentProps<
  PortableTextListItemBlock,
  ContextType
>
export interface ListComponentProps<ContextType = PortableTextSvelteContext>
  extends Omit<BlockComponentProps<ToolkitPortableTextList, ContextType>, 'block'> {
  list: ToolkitPortableTextList & {
    listItem: PortableTextListItemType
  }
}

/**
 * Used solely by BlockSpan, not exposed to end-user
 */
export interface SpanComponentProps<ContextType = PortableTextSvelteContext>
  extends CommonProps<ContextType> {
  parentBlock: PortableTextBlock
  span: ArbitraryTypedObject | PortableTextSpan
}

/**
 * Values passed under the `portableText` prop to components rendering marks.
 */
export interface MarkComponentProps<
  MarkType = string | PortableTextMarkDefinition,
  ContextType = PortableTextSvelteContext
> extends SpanComponentProps<ContextType> {
  mark: MarkType
}

// Unfortunately Svelte components don't play nicely with Typescript,
// so we need to `| any` all of these types
type BlockComponent =
  | SvelteComponentTyped<{
      portableText: BlockComponentProps
    }>
  | any

type MarkComponent =
  | SvelteComponentTyped<{
      portableText: MarkComponentProps
    }>
  | any

type ListComponent =
  | SvelteComponentTyped<{
      portableText: ListComponentProps
    }>
  | any

type ListItemComponent =
  | SvelteComponentTyped<{
      portableText: ListItemComponentProps
    }>
  | any
