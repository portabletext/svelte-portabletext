import nestLists from '../src/lib/nestLists'
import {rawBlocks, normalizedBlocks} from './nestLists.testData'

test('nested lists', () => {
  expect(nestLists(rawBlocks)).toStrictEqual(normalizedBlocks)
})
