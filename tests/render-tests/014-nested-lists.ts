import Rendered from './014-nested-lists.svelte'

export default {
  name: '014-nested-lists',
  rendered: Rendered,
  value: [
    {
      _type: 'block',
      _key: 'a',
      markDefs: [],
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Span'
        }
      ]
    },
    {
      _type: 'block',
      _key: 'b',
      markDefs: [],
      level: 1,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 1, level 1'
        }
      ],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'c',
      markDefs: [],
      level: 1,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 2, level 1'
        }
      ],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'd',
      markDefs: [],
      level: 2,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 3, level 2'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'e',
      markDefs: [],
      level: 3,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 4, level 3'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'f',
      markDefs: [],
      level: 2,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 5, level 2'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'g',
      markDefs: [],
      level: 2,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 6, level 2'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'h',
      markDefs: [],
      level: 1,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 7, level 1'
        }
      ],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'i',
      markDefs: [],
      level: 1,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 8, level 1'
        }
      ],
      listItem: 'bullet'
    },
    {
      _type: 'block',
      _key: 'j',
      markDefs: [],
      level: 1,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 1 of list 2'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'k',
      markDefs: [],
      level: 1,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 2 of list 2'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'l',
      markDefs: [],
      level: 2,
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Item 3 of list 2, level 2'
        }
      ],
      listItem: 'number'
    },
    {
      _type: 'block',
      _key: 'm',
      markDefs: [],
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Just a block'
        }
      ]
    }
  ]
}
