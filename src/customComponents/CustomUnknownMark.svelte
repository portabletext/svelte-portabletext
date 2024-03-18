<script lang="ts">
	import type { MarkComponentProps } from '$lib/rendererTypes';

	export let portableText: MarkComponentProps;
</script>

<span>
	I'm an unknown mark ({portableText.markType})! Here's my content:
	<code><slot /></code> (see console for my values)
</span>
