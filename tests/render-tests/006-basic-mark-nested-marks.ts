import Rendered from './006-basic-mark-nested-marks.svelte'

export default {
  name: '006-basic-mark-nested-marks',
  rendered: Rendered,
  input: [
    {
      _key: 'R5FvMrjo',
      _type: 'block',
      children: [
        {
          _key: 'cZUQGmh4',
          _type: 'span',
          marks: ['strong'],
          text: 'A word of '
        },
        {
          _key: 'toaiCqIK',
          _type: 'span',
          marks: ['strong', 'em'],
          text: 'warning;'
        },
        {
          _key: 'gaZingA',
          _type: 'span',
          marks: [],
          text: ' Sanity is addictive.'
        }
      ],
      markDefs: [],
      style: 'normal'
    }
  ]
}
