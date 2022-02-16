import Rendered from './018-marks-all-the-way-down.svelte'

export default {
  name: '018-marks-all-the-way-down',
  rendered: Rendered,
  input: [
    {
      _type: 'block',
      children: [
        {
          _key: 'a1ph4',
          _type: 'span',
          marks: ['mark1', 'em', 'mark2'],
          text: 'Sanity'
        },
        {
          _key: 'b374',
          _type: 'span',
          marks: ['mark2', 'mark1', 'em'],
          text: ' FTW'
        }
      ],
      markDefs: [
        {
          _key: 'mark1',
          _type: 'highlight',
          thickness: 1
        },
        {
          _key: 'mark2',
          _type: 'highlight',
          thickness: 3
        }
      ]
    }
  ]
}
