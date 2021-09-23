import {LIST_TYPE} from '$lib/nestLists'
import type {NormalizedBlocks, PortableTextBlocks} from '$lib/ptTypes'

// File displaying an example transformation of nestLists.ts
const rawBlocks: PortableTextBlocks = [
  {
    _key: 'block-1',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: '#1 Unordered - level 1'
      }
    ],
    style: 'normal',
    level: 1,
    listItem: 'bullet'
  },
  {
    _key: 'block-2',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: '#2 Unordered - level 1'
      }
    ],
    style: 'normal',
    level: 1,
    listItem: 'bullet'
  },
  {
    _key: 'block-3',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: '#3 Unordered - level 2'
      }
    ],
    style: 'normal',
    level: 2,
    listItem: 'bullet'
  }
]

const normalizedBlocks: NormalizedBlocks = [
  {
    _key: rawBlocks[0]._key,
    _type: LIST_TYPE,
    listItem: rawBlocks[0].listItem,
    children: [
      {
        _key: 'block-1',
        _type: 'block',
        children: [
          {
            _key: 'span-1',
            _type: 'span',
            marks: [],
            text: '#1 Unordered - level 1'
          }
        ],
        style: 'normal',
        level: 1,
        listItem: 'bullet'
      },
      {
        _key: 'block-2',
        _type: 'block',
        children: [
          {
            _key: 'span-1',
            _type: 'span',
            marks: [],
            text: '#2 Unordered - level 1'
          }
        ],
        style: 'normal',
        level: 1,
        listItem: 'bullet',
        '__internal_pt-listChildren': [
          {
            _key: 'block-3',
            _type: 'block',
            children: [
              {
                _key: 'span-1',
                _type: 'span',
                marks: [],
                text: '#3 Unordered - level 2'
              }
            ],
            style: 'normal',
            level: 2,
            listItem: 'bullet'
          }
        ]
      }
    ]
  }
]

// eslint-disable-next-line
console.log(rawBlocks, normalizedBlocks)
