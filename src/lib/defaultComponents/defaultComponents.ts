import type { PortableTextSvelteComponents } from '$lib/rendererTypes';
import DefaultMark from './DefaultMark.svelte';
import DefaultLink from './DefaultLink.svelte';
import DefaultBlock from './DefaultBlock.svelte';
import DefaultList from './DefaultList.svelte';
import DefaultListItem from './DefaultListItem.svelte';
import DefaultHardBreak from './DefaultHardBreak.svelte';
import UnknownType from './UnknownType.svelte';

const defaultComponents: PortableTextSvelteComponents = {
	marks: {
		'strike-through': DefaultMark,
		code: DefaultMark,
		em: DefaultMark,
		strong: DefaultMark,
		underline: DefaultMark,
		link: DefaultLink
	},
	block: {
		blockquote: DefaultBlock,
		h1: DefaultBlock,
		h2: DefaultBlock,
		h3: DefaultBlock,
		h4: DefaultBlock,
		h5: DefaultBlock,
		h6: DefaultBlock,
		normal: DefaultBlock
	},
	list: {
		bullet: DefaultList,
		number: DefaultList
	},
	listItem: {
		bullet: DefaultListItem,
		number: DefaultListItem
	},
	types: {},
	hardBreak: DefaultHardBreak,
	unknownBlockStyle: DefaultBlock,
	unknownList: DefaultList,
	unknownListItem: DefaultListItem,
	unknownMark: DefaultMark,
	unknownType: UnknownType
};

export default defaultComponents;
