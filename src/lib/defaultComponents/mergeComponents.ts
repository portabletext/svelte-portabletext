import type {PortableTextComponents, PortableTextSvelteComponents} from '$lib/rendererTypes'

export function mergeComponents(
  parent: PortableTextSvelteComponents,
  overrides: PortableTextComponents
): PortableTextSvelteComponents {
  return {
    ...parent,
    ...overrides,
    block: {
      ...parent.block,
      ...(overrides?.block || {})
    },
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
