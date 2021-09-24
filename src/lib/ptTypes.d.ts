import type {SvelteComponentTyped} from 'svelte'

interface MarkDef {
  _type: string
  _key: string
  [property: string]: unknown
}

export type MarkComponent = SvelteComponentTyped<{
  block: PTBlock
  span: BlockSpan
  mark: string | MarkDef
}>

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

export type BlockComponent = SvelteComponentTyped<{
  index: number
  blocks: NormalizedBlocks
  _rawBlocks: PortableTextBlocks
  block: PTBlock | PTList
  serializers: Serializers
}>

export interface CustomTypes {
  // eslint-disable-next-line
  [_type: string]: BlockComponent | any
}

export type NativeStyles =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'normal'
  | 'blockquote'
  | 'list_bullet'
  | 'list_number'
  | 'listItem_bullet'
  | 'listItem_number'

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

export interface Serializers {
  marks?: CustomMarks
  types?: CustomTypes
  blockStyles?: CustomStyles
}

export type Mark = 'strong' | 'em' | 'code' | 'underline' | 'strike-through' | string

export interface BlockSpan {
  _type: 'span'
  _key: string
  text: string
  /**
   * Refers to a _key in parent's markDefs or a specific decorator ("strong", "em", etc.)
   */
  marks?: Mark[]
}

interface BlockChild {
  _type: string
  _key: string
  [property: string]: unknown
}

export type ListTypes = 'bullet' | 'number'

export interface PTBlock {
  _type: 'block'
  _key: string
  style: string
  children: (BlockChild & BlockSpan)[]
  markDefs?: MarkDef[]
  level?: number
  listItem?: ListTypes
  '__internal_pt-listChildren'?: PTBlock[]
}

export interface PTCustomBlock {
  _type: string
  _key: string
  [property: string]: unknown
}

export interface PTList {
  _key: string
  _type: '__internal_pt-list'
  listItem?: ListTypes
  /**
   * Blocks / lists to render under the <ul>/<ol> tags.
   */
  children: PTBlock[]
}

export type PortableTextBlocks = (PTBlock | PTCustomBlock)[]

export type NormalizedBlocks = (PTBlock | PTCustomBlock | PTList)[]
