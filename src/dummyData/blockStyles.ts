import type {PortableTextBlocks} from '$lib/ptTypes'
import {NATIVE_STYLES} from '../sharedData/styles'

const blocks: PortableTextBlocks = [
  ...Object.keys(NATIVE_STYLES).map(
    (style, index) =>
      ({
        _key: `block-${3 + index}`,
        _type: 'block',
        children: [
          {
            _key: 'span-1',
            _type: 'span',
            marks: [],
            text: `Block style: ${style}`
          }
        ],
        markDefs: [],
        style
      } as any)
  )
]

export default blocks
