/* eslint-disable */

import {cleanup, render} from '@testing-library/svelte/svelte5'
import {format} from 'prettier'
import parsers from 'prettier/parser-html'
import {test, expect} from 'vitest'

import PortableText from '../src/lib/PortableText.svelte'

import allTests from './render-tests'

for (const renderTest of allTests) {
  test(renderTest.name, async () => {
    expect(5).toBe(5)
    const renderedByPackage = render(PortableText, {
      value: renderTest.value,
      components: renderTest.components
    }).container.innerHTML
    cleanup()
    const expectedRender = render(renderTest.rendered).container.innerHTML

    expect(
      // @TODO figure out why rendered output is full of empty comments
      await format(renderedByPackage.replaceAll('<!---->', ''), {
        parser: 'html',
        plugins: [parsers]
      })
    ).toBe(await format(expectedRender, {parser: 'html', plugins: [parsers]}))
  })
}

// @TODO: add tests for props each type of block should be receiving
