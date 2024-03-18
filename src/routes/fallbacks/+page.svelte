<script>
	import PortableText from '$lib/PortableText.svelte';
	import UnknownMark from '../../customComponents/CustomUnknownMark.svelte';
	import UnknownType from '../../customComponents/CustomUnknownType.svelte';

	import fallbacks from '../../dummyData/fallbacks';
</script>

<PortableText
	value={fallbacks}
	components={{ unknownType: UnknownType, unknownMark: UnknownMark }}
	onMissingComponent={(message, options) => {
		console.log('Custom missing component handler', { message, ...options });
	}}
/>
