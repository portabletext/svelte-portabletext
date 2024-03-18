<script lang="ts">
	import type { ListComponentProps } from '../rendererTypes';

	export let portableText: ListComponentProps;

	$: ({ value } = portableText);

	$: ({ listItem } = value);
</script>

{#if listItem === 'number'}
	<ol><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}
