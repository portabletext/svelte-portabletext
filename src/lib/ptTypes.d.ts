interface MarkDef {
  _type: string
  _key: string
  [property: string]: unknown
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

interface BlockChild {
  _type: string
  _key: string
  [property: string]: unknown
}

export type ListTypes = 'bullet' | 'number'

export interface PTBlock {
  _type: 'block'
  _key: string
  style: NativeStyles | string
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
