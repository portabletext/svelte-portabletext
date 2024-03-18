<!-- Used by 026 -->
<script lang="ts">
	import type { CustomBlockComponentProps } from '../../src/lib/rendererTypes';

	export let portableText: CustomBlockComponentProps<{ text?: string }>;

	$: ({ text } = portableText.value || {});
</script>

<button>
	{text}
</button>
