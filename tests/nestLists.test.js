import nestLists from '../package/nestLists'
import {rawBlocks, normalizedBlocks} from './nestLists.testData'

test('nested lists', () => {
  expect(nestLists(rawBlocks)).toStrictEqual(normalizedBlocks)
})
