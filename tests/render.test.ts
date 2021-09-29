/* eslint-disable */
import '@testing-library/jest-dom'
import {render} from '@testing-library/svelte'

import PortableText from '../src/lib/PortableText.svelte'

import allTests from './render-tests'

for (const renderTest of allTests) {
  test(renderTest.name, () => {
    const renderedByPackage = render(PortableText, {blocks: renderTest.blocks})
    const expectedRender = render(renderTest.rendered)

    expect(renderedByPackage.container.children[0].innerHTML).toBe(
      expectedRender.container.children[0].innerHTML
    )
  })
}
