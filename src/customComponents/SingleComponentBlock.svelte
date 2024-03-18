<script lang="ts">
	import type { BlockComponentProps } from '$lib/rendererTypes';

	export let portableText: BlockComponentProps;

	$: ({ value } = portableText);
	$: ({ style = 'normal' } = value);
</script>

<div style:background="papayawhip">
	<em style:color="#888">I was rendered from a single `components.block` Svelte component</em>
	{#if style === 'h1'}
		<h1><slot /></h1>
	{:else if style === 'h2'}
		<h2><slot /></h2>
	{:else if style === 'h3'}
		<h3><slot /></h3>
	{:else if style === 'h4'}
		<h4><slot /></h4>
	{:else if style === 'h5'}
		<h5><slot /></h5>
	{:else if style === 'h6'}
		<h6><slot /></h6>
	{:else if style === 'blockquote'}
		<blockquote><slot /></blockquote>
	{:else if style === 'normal'}
		<p><slot /></p>
	{:else}
		<slot />
	{/if}
</div>
