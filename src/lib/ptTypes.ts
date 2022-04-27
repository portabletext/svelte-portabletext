import type {nestLists} from '@portabletext/toolkit'
import type {PortableTextBlock} from '@portabletext/types'

export interface PortableTextSvelteContext {
  [key: string]: unknown
}

export declare type PortableTextMarkType =
  | 'strong'
  | 'em'
  | 'strike-through'
  | 'underline'
  | 'code'
  | string

export type InputValue = PortableTextBlock | PortableTextBlock[]

export type NormalizedBlocks = ReturnType<typeof nestLists>

export type GenericNode = NormalizedBlocks[0]
