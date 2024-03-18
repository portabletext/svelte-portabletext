<script lang="ts">
	import type { CustomBlockComponentProps } from '$lib/rendererTypes';

	export let portableText: CustomBlockComponentProps<{
		image: {
			extension: string;
			url: string;
			aspectRatio: number;
		};
		caption: string;
	}>;

	$: ({ value } = portableText);
</script>

<figure>
	<img src={value.image.url} alt={value.caption} />

	<figcaption>{value.caption}</figcaption>
</figure>
