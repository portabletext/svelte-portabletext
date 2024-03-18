<script lang="ts">
	import type { MarkComponentProps } from '../rendererTypes';

	export let portableText: MarkComponentProps;

	$: ({ markType } = portableText);
</script>

{#if markType === 'strong'}
	<strong>
		<slot />
	</strong>
{:else if markType === 'em'}
	<em>
		<slot />
	</em>
{:else if markType === 'code'}
	<code>
		<slot />
	</code>
{:else if markType === 'underline'}
	<span style="text-decoration:underline;">
		<slot />
	</span>
{:else if markType === 'strike-through'}
	<del>
		<slot />
	</del>
{:else}
	<slot />
{/if}
