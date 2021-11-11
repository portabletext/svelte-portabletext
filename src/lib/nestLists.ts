import assertBlockKey from './assertBlockKey'
import type {NormalizedBlocks, PortableTextBlocks, PTBlock, PTCustomBlock, PTList} from './ptTypes'

/** Key for the auto-generated block type for top-level lists. */
export const LIST_TYPE: PTList['_type'] = '__internal_pt-list'

/** Key for auto-generated property of list items that contain nested children. */
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
    // Non-list blocks don't need to be reduced, just have their keys asserted
    if (!assertListItem(entry)) {
      return [...normalizedBlocks, assertBlockKey(entry)]
    }

    // Asserting the current entry as a non-custom block for TS reasons™
    const curBlock = entry as PTBlock

    // Skip nested blocks as they'll be included in previous items
    // (see nestedBlocks below)
    if (curBlock.level !== level) {
      return normalizedBlocks
    }

    const followingBlocks = blocks.slice(curIndex + 1)
    const firstNonNested = followingBlocks.findIndex(
      // A following block isn't nested under the current block if:
      (block) =>
        // 1. it isn't a list item
        !assertListItem(block) ||
        // 2. is of a list type different than the current one
        // (a "bullet" after a "number", for ex.)
        block.listItem !== curBlock.listItem ||
        // 3. or it's in the same level or higher than the curBlock
        block.level <= curBlock.level
    )
    const nestedBlocks = followingBlocks.slice(
      0,
      // If there's none that isn't nested, include all following blocks
      firstNonNested >= 0 ? firstNonNested : undefined
    )
    const listChildren = nestLists(nestedBlocks, level + 1) as PTBlock[]
    const parsedBlock = assertBlockKey({
      ...curBlock,
      ...(listChildren?.length > 0 ? {[BLOCK_LIST_ITEMS]: listChildren} : {})
    }) as PTBlock

    const previousBlock = normalizedBlocks.slice(-1)[0]

    // If the previous block is a list of the same type/listItem,
    // add the current block as its child
    if (previousBlock?._type === LIST_TYPE && previousBlock.listItem === curBlock.listItem) {
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

    // The block to be added to the non-nested blocks array.
    const finalBlock =
      level === 1
        ? // If level === 1, curBlock is the first list item of a top-level list.
          // In this case, create a new parent block of LIST_TYPE.
          assertBlockKey({
            _key: curBlock._key,
            _type: LIST_TYPE,
            listItem: curBlock.listItem,
            children: [parsedBlock]
          })
        : // Else, we're in a nested list item that can keep as is
          parsedBlock

    return [...normalizedBlocks, finalBlock]
  }, [] as NormalizedBlocks)
}
