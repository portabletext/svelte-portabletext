import type {PortableTextComponents, PortableTextSvelteComponents} from '$lib/rendererTypes'

export function mergeComponents(
  parent: PortableTextSvelteComponents,
  overrides: PortableTextComponents
): PortableTextSvelteComponents {
  return {
    ...parent,
    ...overrides,
    block: mergeBlock(parent, overrides),
    marks: {
      ...parent.marks,
      ...(overrides?.marks || {})
    },
    types: {
      ...parent.types,
      ...(overrides?.types || {})
    }
  }
}

/**
 * As blocks can be single functions, we can't simply spread them as objects
 */
function mergeBlock(
  parent: PortableTextSvelteComponents,
  overrides: PortableTextComponents
): PortableTextSvelteComponents['block'] {
  const override = overrides?.block
  const parentVal = parent.block

  if (typeof override === 'function') {
    return override
  }

  if (override && typeof parentVal === 'function') {
    return override
  }

  if (override) {
    return {...parentVal, ...override}
  }

  return parentVal
}
