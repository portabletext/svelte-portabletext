import {cleanup, render} from '@testing-library/svelte/svelte5'
import {afterEach, describe, expect, test} from 'vitest'

import PortableText from '../src/lib/PortableText.svelte'

function renderLink(markDef: Record<string, unknown>) {
  return render(PortableText, {
    value: [
      {
        _type: 'block',
        _key: 'block',
        children: [{_type: 'span', _key: 'span', marks: ['link'], text: 'Sanity'}],
        markDefs: [{_type: 'link', _key: 'link', ...markDef}]
      }
    ]
  }).container
}

afterEach(cleanup)

describe('link hrefs', () => {
  test.each([
    'https://sanity.io/',
    'http://sanity.io/',
    'mailto:hello@sanity.io',
    'tel:+4711111111',
    '#section',
    '/docs',
    'docs/intro',
    '../docs',
    '?query=a:b'
  ])('links the safe href %j', (href) => {
    const container = renderLink({href})
    expect(container.querySelector('a')?.getAttribute('href')).toBe(href)
  })

  test.each([
    'javascript:alert(1)',
    ' JavaScript:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'vbscript:msgbox(1)'
  ])('renders the unsafe href %j as plain text', (href) => {
    const container = renderLink({href})
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('p')?.textContent).toBe('Sanity')
  })

  test.each(['url', 'link', 'value'])('guards the %s fallback property', (property) => {
    const container = renderLink({[property]: 'javascript:alert(1)'})
    expect(container.querySelector('a')).toBeNull()
    expect(container.querySelector('p')?.textContent).toBe('Sanity')
  })
})
