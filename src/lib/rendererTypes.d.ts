import type {SvelteComponentTyped} from 'svelte'
import type {
  BlockSpan,
  MarkDef,
  NormalizedBlocks,
  PortableTextBlocks,
  PTBlock,
  PTList
} from './ptTypes'

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
}

interface CommonProps {
  ignoreUnknownTypes?: boolean
  serializers?: Serializers
}

export interface BlockProps extends CommonProps {
  index: number
  blocks: NormalizedBlocks
  _rawBlocks: PortableTextBlocks
  block: PTBlock | PTList
  /**
   * Exclusive to inline blocks.
   */
  parentBlock?: PTBlock
}

export interface SpanProps extends CommonProps {
  block: PTBlock
  span: BlockSpan
}

export interface MarkProps extends SpanProps {
  mark: string | MarkDef
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
