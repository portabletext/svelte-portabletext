<script lang="ts">
	import type { InputValue } from '$lib/ptTypes';

	import type { MarkComponentProps } from '$lib/rendererTypes';

	interface FootnoteProps {
		_key: string;
		note: InputValue;
	}

	export let portableText: MarkComponentProps<
		FootnoteProps,
		// Use the second argument to specify your context's type
		{
			footnotes: FootnoteProps[];
		}
	>;

	$: number =
		portableText.global.context.footnotes.findIndex(
			(note) => note._key === portableText.value._key
		) + 1;
</script>

<span id="src-{portableText.value._key}">
	<slot /><sup><a href={`#note-${portableText.value._key}`}>{number}</a></sup>
</span>
