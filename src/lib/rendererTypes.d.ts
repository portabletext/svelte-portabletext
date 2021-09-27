import type {SvelteComponentTyped} from 'svelte'
import type {BlockSpan, MarkDef, NormalizedBlocks, PortableTextBlocks, PTBlock} from './ptTypes'

export interface CustomStyles {
  /* eslint-disable */
  h1?: BlockComponent | any
  h2?: BlockComponent | any
  h3?: BlockComponent | any
  h4?: BlockComponent | any
  h5?: BlockComponent | any
  h6?: BlockComponent | any
  normal?: BlockComponent | any
  blockquote?: BlockComponent | any
  list_bullet?: BlockComponent | any
  list_number?: BlockComponent | any
  listItem_bullet?: BlockComponent | any
  listItem_number?: BlockComponent | any
  [_type: string]: BlockComponent | any
  /* eslint-enable */
}

export interface CustomMarks {
  /* eslint-disable */
  strong?: MarkComponent | any
  em?: MarkComponent | any
  'strike-through'?: MarkComponent | any
  underline?: MarkComponent | any
  code?: MarkComponent | any
  [_type: string]: MarkComponent | any
  /* eslint-enable */
}

export interface CustomTypes {
  // eslint-disable-next-line
  [_type: string]: BlockComponent | any
}

export interface Serializers {
  marks?: CustomMarks
  types?: CustomTypes
  blockStyles?: CustomStyles
  /* eslint-disable */
  /**
   * Override the default serializer for blocks of unknown type, if ignoreUnknownTypes is set to false.
   */
  unknownType?: BlockComponent | any
  /**
   * Override the default serializer for marks of unknown type. Defaults to rendering its content without a container.
   */
  unknownMark?: MarkComponent | any
  /* eslint-enable */
}

interface CommonProps {
  ignoreUnknownTypes?: boolean
  serializers?: Serializers
}

export interface BlockProps<BlockType = PTBlock> extends CommonProps {
  index: number
  blocks: NormalizedBlocks
  _rawBlocks: PortableTextBlocks
  block: BlockType
  /**
   * Exclusive to inline blocks.
   */
  parentBlock?: PTBlock
}

/**
 * Used solely by BlockSpan, not exposed to end-user
 */
export interface SpanProps extends CommonProps {
  block: PTBlock
  span: BlockSpan
}

export interface MarkProps<MarkType = string | MarkDef> extends SpanProps {
  mark: MarkType
}

export type BlockComponent = SvelteComponentTyped<{
  portableText: BlockProps
}>

export type MarkComponent = SvelteComponentTyped<{
  portableText: MarkProps
}>

export type SpanComponent = SvelteComponentTyped<{
  portableText: SpanProps
}>
