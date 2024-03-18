<script lang="ts">
	import type { BlockComponentProps } from '../rendererTypes.js';

	export let portableText: BlockComponentProps;

	$: ({ value } = portableText);

	$: style = value.style || 'normal';
</script>

{#if ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote'].includes(style)}
	<svelte:element this={style}><slot /></svelte:element>
{:else if style === 'normal'}
	<p><slot /></p>
{:else}
	<slot />
{/if}
