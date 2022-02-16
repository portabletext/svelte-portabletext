import type {PortableTextBlockStyle} from '@portabletext/types'
import type {SvelteComponentTyped} from 'svelte'
import type {
  BlockSpan,
  InputValue,
  MarkDef,
  NormalizedBlocks,
  PortableTextMarkType,
  PTBlock,
  PTContext
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

interface CommonProps {
  ignoreUnknownTypes?: boolean
  components?: PortableTextSvelteComponents
  context: PTContext
}

export interface BlockProps<BlockType = PTBlock, ContextType = PTContext> extends CommonProps {
  index: number
  blocks: NormalizedBlocks
  _rawInput: InputValue
  block: BlockType
  context: ContextType
  /**
   * Exclusive to inline blocks.
   */
  parentBlock?: PTBlock
}

/**
 * Used solely by BlockSpan, not exposed to end-user
 */
export interface SpanProps extends CommonProps {
  parentBlock: PTBlock
  span: BlockSpan
}

export interface MarkProps<MarkType = string | MarkDef, ContextType = PTContext> extends SpanProps {
  mark: MarkType
  context: ContextType
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
