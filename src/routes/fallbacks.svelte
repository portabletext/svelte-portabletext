<script>
  import PortableText from '$lib/PortableText.svelte'
  import UnknownMark from '../customComponents/UnknownMark.svelte'
  import UnknownType from '../customComponents/UnknownType.svelte'

  import fallbacks from '../dummyData/fallbacks'
</script>

<PortableText value={fallbacks} components={{unknownType: UnknownType, unknownMark: UnknownMark}} />
