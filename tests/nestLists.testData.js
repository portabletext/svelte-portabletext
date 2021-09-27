import {LIST_TYPE} from '../package/nestLists'

// File displaying an example transformation of nestLists.ts
export const rawBlocks = [
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
  },
  {
    _key: 'block-4',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Heading (non-list element)'
      }
    ],
    style: 'h2'
  },
  {
    _key: 'block-5',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'And a paragraph to test if lists can be self-contained'
      }
    ],
    style: 'h2'
  },
  {
    _key: 'block-6',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: '#1 Ordered - level 1'
      }
    ],
    style: 'normal',
    level: 1,
    listItem: 'number'
  },
  {
    _key: 'block-7',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: '#2 Ordered - level 1'
      }
    ],
    style: 'normal',
    level: 1,
    listItem: 'number'
  },
  {
    _key: 'block-8',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: '#3 Ordered - level 2'
      }
    ],
    style: 'normal',
    level: 2,
    listItem: 'number'
  }
]

export const normalizedBlocks = [
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
  },
  {
    _key: 'block-4',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Heading (non-list element)'
      }
    ],
    style: 'h2'
  },
  {
    _key: 'block-5',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'And a paragraph to test if lists can be self-contained'
      }
    ],
    style: 'h2'
  },
  {
    _key: rawBlocks[5]._key,
    _type: LIST_TYPE,
    listItem: 'number',
    children: [
      {
        _key: 'block-6',
        _type: 'block',
        children: [
          {
            _key: 'span-1',
            _type: 'span',
            marks: [],
            text: '#1 Ordered - level 1'
          }
        ],
        style: 'normal',
        level: 1,
        listItem: 'number'
      },
      {
        _key: 'block-7',
        _type: 'block',
        children: [
          {
            _key: 'span-1',
            _type: 'span',
            marks: [],
            text: '#2 Ordered - level 1'
          }
        ],
        style: 'normal',
        level: 1,
        listItem: 'number',
        '__internal_pt-listChildren': [
          {
            _key: 'block-8',
            _type: 'block',
            children: [
              {
                _key: 'span-1',
                _type: 'span',
                marks: [],
                text: '#3 Ordered - level 2'
              }
            ],
            style: 'normal',
            level: 2,
            listItem: 'number'
          }
        ]
      }
    ]
  }
]
