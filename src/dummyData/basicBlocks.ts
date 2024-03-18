/* eslint-disable @typescript-eslint/no-explicit-any */
import type {InputValue} from '$lib/ptTypes'
import {NATIVE_MARKS} from './sharedData/marks'
import {NATIVE_STYLES} from './sharedData/styles'

// This data was written by hand.
// In a real-world scenario it'd be generated from the PortableText Editor.
// https://github.com/sanity-io/sanity/tree/next/packages/%40sanity/portable-text-editor
const blocks: InputValue = [
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
      }) as any
  ),
  {
    _key: 'ol-0',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Ordered lists'
      }
    ],
    markDefs: [],
    listItem: 'number',
    level: 1
  },
  {
    _key: 'ol-1',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'With nested children'
      }
    ],
    markDefs: [],
    listItem: 'number',
    level: 2
  },
  {
    _key: 'ol-2',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'And siblings!'
      }
    ],
    markDefs: [],
    listItem: 'number',
    level: 1
  },
  {
    _key: 'ul-0',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Unordered lists'
      }
    ],
    markDefs: [],
    listItem: 'bullet',
    level: 1
  },
  {
    _key: 'ul-1',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'With nested children'
      }
    ],
    markDefs: [],
    listItem: 'bullet',
    level: 2
  },
  {
    _key: 'ul-2',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'And siblings!'
      }
    ],
    markDefs: [],
    listItem: 'bullet',
    level: 1
  },
  {
    _key: 'formatting-heading',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Rich-text formatting'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'formatting-1',
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
          }) as any
      )
    ],
    markDefs: [],
    style: 'normal'
  },
  {
    _key: 'formatting-2',
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
    _key: 'formatting-3',
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
