import Rendered from './052-custom-marks.svelte'

export default {
  name: '052-custom-marks',
  rendered: Rendered,
  input: [
    {
      _type: 'block',
      children: [
        {
          _key: 'a1ph4',
          _type: 'span',
          marks: ['mark1'],
          text: 'Sanity'
        }
      ],
      markDefs: [
        {
          _key: 'mark1',
          _type: 'highlight',
          thickness: 5
        }
      ]
    }
  ]
}
