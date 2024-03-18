// Main module users interact with
export { default as PortableText } from './PortableText.svelte';

// Utilities
export { toPlainText } from '@portabletext/toolkit';

// Default components for edge cases of overwriting components in a specific way
export { default as DefaultBlock } from './defaultComponents/DefaultBlock.svelte';
export { default as DefaultList } from './defaultComponents/DefaultList.svelte';
export { default as DefaultListItem } from './defaultComponents/DefaultListItem.svelte';
export { default as DefaultMark } from './defaultComponents/DefaultMark.svelte';

// Types
export type { InputValue } from './ptTypes.js';

export type {
	BlockComponentProps,
	CustomBlockComponentProps,
	MarkComponentProps,
	ListComponentProps,
	ListItemComponentProps,
	PortableTextComponents
} from './rendererTypes.js';
