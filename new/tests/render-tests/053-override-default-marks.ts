import Rendered from './053-override-default-marks.svelte'
import Link from '../test-components/Link.svelte'

export default {
  name: '053-override-default-marks',
  rendered: Rendered,
  components: {
    marks: {
      link: Link
    }
  },
  value: [
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
          _type: 'link',
          href: 'https://sanity.io'
        }
      ]
    }
  ]
}
