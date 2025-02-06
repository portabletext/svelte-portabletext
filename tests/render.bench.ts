import {bench, describe} from 'vitest'

import {render} from '@testing-library/svelte/svelte5'

import PortableText from '../src/lib/PortableText.svelte'

import allTests from './render-tests'

for (const renderTest of allTests) {
  describe(renderTest.name, () => {
    bench(renderTest.name, () => {
      render(PortableText, {
        value: renderTest.value,
        components: renderTest.components
      })
    })
  })
}
