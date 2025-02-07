import type {ArbitraryTypedObject, PortableTextBlock, PortableTextSpan} from '@portabletext/types'

function getRandomKey(): string {
  return Math.random().toFixed(5).split('.')[1]
}

function assertSpanKey(span: PortableTextSpan | ArbitraryTypedObject) {
  return {
    _key: span._key || getRandomKey(),
    ...span
  }
}

export default function assertBlockKey(
  block: PortableTextBlock | ArbitraryTypedObject
): typeof block {
  return {
    _key: block._key || getRandomKey(),
    ...block,
    ...(block._type === 'block' && Array.isArray(block.children)
      ? {
          children: block.children.map(assertSpanKey)
        }
      : {})
  }
}
