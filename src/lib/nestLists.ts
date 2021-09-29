import assertBlockKey from './assertBlockKey'
import type {NormalizedBlocks, PortableTextBlocks, PTBlock, PTCustomBlock, PTList} from './ptTypes'

export const LIST_TYPE: PTList['_type'] = '__internal_pt-list'
export const BLOCK_LIST_ITEMS = '__internal_pt-listChildren'

export function assertListItem(block: PTBlock | PTCustomBlock): boolean {
  return (
    block._type === 'block' &&
    typeof block.level === 'number' &&
    ['bullet', 'number'].includes(block.listItem as string)
  )
}

/**
 * Takes a list of blocks and nests its lists for proper rendering in <BlockRenderer>.
 * The top-level list becomes of type PTList and includes all of the blocks as its children.
 * List items are regular blocks that can include nested items in block[BLOCK_LIST_ITEMS].
 * Refer to nestLists.test.js for a clear view on the transformation.
 */
export default function nestLists(blocks: PortableTextBlocks, level = 1): NormalizedBlocks {
  return blocks.reduce((normalizedBlocks, entry, curIndex) => {
    // Do nothing about non-list items
    if (!assertListItem(entry)) {
      return [...normalizedBlocks, assertBlockKey(entry)]
    }

    // Asserting the current entry as a non-custom block
    const curBlock = entry as PTBlock

    // Skip nested blocks as they'll be included in previous items
    if (curBlock.level !== level) {
      return normalizedBlocks
    }

    const followingBlocks = blocks.slice(curIndex + 1)
    const firstNonNested = followingBlocks.indexOf(
      followingBlocks.find((block) => !assertListItem(block) || block.level <= curBlock.level)
    )
    const nestedBlocks = followingBlocks.slice(
      0,
      // If there's none that isn't nested, include all following blocks
      firstNonNested >= 0 ? firstNonNested : undefined
    )
    const listChildren = nestLists(nestedBlocks, level + 1) as PTBlock[]
    const parsedBlock = assertBlockKey({
      ...curBlock,
      ...(listChildren?.length > 0 ? {'__internal_pt-listChildren': listChildren} : {})
    }) as PTBlock

    // If inside a list type, add the current block as its child
    const previousBlock = normalizedBlocks.slice(-1)[0]
    if (previousBlock?._type === LIST_TYPE) {
      // Asserting the current entry as a non-custom block
      const parentBlock = previousBlock as PTList

      return [
        ...normalizedBlocks.slice(0, -1),
        {
          ...parentBlock,
          children: [...parentBlock.children, parsedBlock]
        }
      ]
    }

    return [
      ...normalizedBlocks,
      level === 1
        ? assertBlockKey({
          _key: curBlock._key,
          _type: LIST_TYPE,
          listItem: curBlock.listItem,
          children: [parsedBlock]
        })
        : parsedBlock
    ]
  }, [] as NormalizedBlocks)
}
