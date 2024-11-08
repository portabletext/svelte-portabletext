/* eslint-disable */

import {cleanup, render} from '@testing-library/svelte/svelte5'
import {format} from 'prettier'
import {test, expect} from 'vitest'

import PortableText from '../src/lib/PortableText.svelte'

import allTests from './render-tests'

for (const renderTest of allTests) {
  test(renderTest.name, async () => {
    const renderedByPackage = render(PortableText, {
      value: renderTest.value,
      components: renderTest.components
    }).container.innerHTML
    // cleanup()
    // const expectedRender = render(renderTest.rendered).container.innerHTML

    // expect(await format(renderedByPackage, {parser: 'html'})).toBe(
    //   await format(expectedRender, {parser: 'html'})
    // )
  })
}

// @TODO: add tests for props each type of block should be receiving
