import Rendered from './026-inline-block-with-text.svelte'

export default {
  name: '026-inline-block-with-text',
  rendered: Rendered,
  input: [
    {
      _type: 'block',
      _key: 'foo',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Men, '
        },
        {
          _type: 'button',
          text: 'bli med du også'
        },
        {
          _type: 'span',
          text: ', da!'
        }
      ]
    }
  ]
}
