import type {PortableTextSvelteComponents} from '$lib/rendererTypes'
import DefaultMark from './DefaultMark.svelte'
import DefaultBlock from './DefaultBlock.svelte'

const defaultComponents: PortableTextSvelteComponents = {
  marks: {
    'strike-through': DefaultMark,
    code: DefaultMark,
    em: DefaultMark,
    strong: DefaultMark,
    underline: DefaultMark,
    link: DefaultMark
  },
  block: {
    blockquote: DefaultBlock,
    h1: DefaultBlock,
    h2: DefaultBlock,
    h3: DefaultBlock,
    h4: DefaultBlock,
    h5: DefaultBlock,
    h6: DefaultBlock,
    normal: DefaultBlock
  },
  types: {}
}

export default defaultComponents
