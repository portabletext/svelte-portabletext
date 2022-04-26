import Rendered from './026-inline-block-with-text.svelte'
import Button from '../test-components/Button.svelte'

export default {
  name: '026-inline-block-with-text',
  rendered: Rendered,
  components: {
    types: {
      button: Button
    }
  },
  value: [
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
