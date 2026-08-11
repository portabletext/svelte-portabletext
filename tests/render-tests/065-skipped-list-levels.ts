import Rendered from './065-skipped-list-levels.svelte'

export default {
  name: '065-skipped-list-levels',
  rendered: Rendered,
  value: [
    {
      listItem: 'number',
      style: 'normal',
      level: 3,
      _type: 'block',
      _key: 'level-3-item-1',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'Level 3, item 1',
          marks: []
        }
      ]
    },
    {
      listItem: 'number',
      style: 'normal',
      level: 1,
      _type: 'block',
      _key: 'level-1-item-2',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'Level 1, item 2',
          marks: []
        }
      ]
    },
    {
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      _type: 'block',
      _key: 'level-1-bullet',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'Level 1 bullet',
          marks: []
        }
      ]
    },
    {
      listItem: 'bullet',
      style: 'normal',
      level: 4,
      _type: 'block',
      _key: 'level-4-bullet',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'Level 4 bullet',
          marks: []
        }
      ]
    },
    {
      listItem: 'bullet',
      style: 'normal',
      level: 1,
      _type: 'block',
      _key: 'level-1-bullet-again',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'Level 1 bullet again',
          marks: []
        }
      ]
    }
  ]
}
