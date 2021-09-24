import type {PortableTextBlocks} from '$lib/ptTypes'

const blocks: PortableTextBlocks = [
  {
    _key: 'block-0',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: ['mark-1'],
        text: 'Portable Text'
      },
      {
        _key: 'span-2',
        _type: 'span',
        marks: [],
        text: ' to svelte'
      }
    ],
    markDefs: [
      {
        _key: 'mark-1',
        _type: 'blockAbsUrl',
        url: 'https://portabletext.org'
      }
    ],
    style: 'h1'
  },
  {
    _key: 'block-1',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: ['code'],
        text: 'npm i portable-text-to-svelte'
      }
    ],
    markDefs: [],
    style: 'normal'
  }
]

export default blocks
