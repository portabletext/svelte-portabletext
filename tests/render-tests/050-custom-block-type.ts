import Rendered from './050-custom-block-type.svelte'

export default {
  name: '050-custom-block-type',
  rendered: Rendered,
  value: [
    {
      _type: 'code',
      _key: '9a15ea2ed8a2',
      language: 'javascript',
      code: "const foo = require('foo')\n\nfoo('hi there', (err, thing) => {\n  console.log(err)\n})\n"
    }
  ]
}
