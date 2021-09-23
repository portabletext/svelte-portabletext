import type {SvelteComponent} from 'svelte'

interface MarkDef {
  _type: string
  _key: string
  [property: string]: unknown
}

export interface CustomMarks {
  [_type: string]: SvelteComponent
}

export interface CustomTypes {
  [_type: string]: SvelteComponent
}

export interface CustomStyles {
  [_type: string]: SvelteComponent
}

export interface Serializers {
  marks: CustomMarks
  types: CustomTypes
  blockStyles: CustomStyles
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
