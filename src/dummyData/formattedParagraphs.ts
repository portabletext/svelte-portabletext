import type {PortableTextBlocks} from '$lib/ptTypes'
import {NATIVE_MARKS} from '../sharedData/marks'

const blocks: PortableTextBlocks = [
  {
    _key: 'block-0',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Formatted paragraphs'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'block-1',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Paragraph 1 (individual formatting): '
      },
      ...Object.keys(NATIVE_MARKS).map(
        (mark, idx) =>
          ({
            _key: `span-${2 + idx}`,
            _type: 'span',
            marks: [mark],
            text: mark
          } as any)
      )
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'block-2',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Paragraph 2: '
      },
      {
        _key: 'span-2',
        _type: 'span',
        marks: Object.keys(NATIVE_MARKS),
        text: 'all formatting stacked!'
      },
      {
        _key: 'span-3',
        _type: 'span',
        marks: [],
        text: ' & '
      },
      {
        _key: 'span-4',
        _type: 'span',
        marks: Object.keys(NATIVE_MARKS).reverse(),
        text: 'all formatting stacked (reversed)!'
      }
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'block-3',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Paragraph 3: '
      },
      {
        _key: 'span-2',
        _type: 'span',
        marks: ['jkasdjkhasjhkdasjk'],
        text: 'invalid mark'
      },
      {
        _key: 'span-3',
        _type: 'span',
        marks: [],
        text: ', '
      },
      {
        _key: 'span-4',
        _type: 'span',
        marks: ['mark-1'],
        text: 'unknown mark'
      },
      {
        _key: 'span-5',
        _type: 'span',
        marks: [],
        text: ', '
      },
      {
        _key: 'span-6',
        _type: 'span',
        marks: ['jkasdjkhasjhkdasjk', ...Object.keys(NATIVE_MARKS)],
        text: 'invalid mark with all formatting'
      },
      {
        _key: 'span-7',
        _type: 'span',
        marks: [],
        text: ', '
      },
      {
        _key: 'span-8',
        _type: 'span',
        marks: ['mark-1', ...Object.keys(NATIVE_MARKS)],
        text: 'unknown mark with all formatting'
      },
      {
        _key: 'span-9',
        _type: 'span',
        marks: [],
        text: ', '
      },
      {
        _key: 'span-10',
        _type: 'span',
        marks: [...Object.keys(NATIVE_MARKS), 'jkasdjkhasjhkdasjk'],
        text: 'invalid mark with all formatting (reversed)'
      },
      {
        _key: 'span-11',
        _type: 'span',
        marks: [],
        text: ' & '
      },
      {
        _key: 'span-12',
        _type: 'span',
        marks: [...Object.keys(NATIVE_MARKS), 'mark-1'],
        text: 'unknown mark with all formatting (reversed)'
      }
    ],
    markDefs: [
      {
        _key: 'mark-1',
        _type: 'blockAbsUrl',
        url: 'sanity.io'
      }
    ],
    style: 'normal'
  }
]

export default blocks
