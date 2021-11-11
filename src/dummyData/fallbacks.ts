import type {PortableTextBlocks} from '$lib/ptTypes'

// This data was written by hand.
// In a real-world scenario it'd be generated from the PortableText Editor.
// https://github.com/sanity-io/sanity/tree/next/packages/%40sanity/portable-text-editor
const blocks: PortableTextBlocks = [
  {
    _key: 'block-0',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: [],
        text: 'Fallbacks'
      }
    ],
    markDefs: [],
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
        text: 'serializers.unknownType'
      }
    ],
    markDefs: [],
    style: 'h2'
  },
  {
    _key: 'block-3',
    _type: 'myCustomType',
    customProperty: true,
    title: "I'm not rendered as no one added a proper serializer for me 😟"
  },
  {
    _key: 'block-4',
    _type: 'block',
    children: [
      {
        _key: 'span-1',
        _type: 'span',
        marks: ['code'],
        text: 'serializers.unknownMark'
      }
    ],
    markDefs: [],
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
        text: 'Rendering an '
      },
      {
        _key: 'span-2',
        _type: 'span',
        marks: ['unknown-mark'],
        text: 'Rendering an unknown mark'
      }
    ],
    markDefs: [],
    style: 'normal'
  }
]

export default blocks
