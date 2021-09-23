<script>
  import PortableText from '$lib/PortableText.svelte'
  import plainText from '../dummyData/plainText'
  import formattedParagraphs from '../dummyData/formattedParagraphs'
  import unorderedLists from '../dummyData/unorderedLists'
</script>

<h1>Svelte Portable Text</h1>

<PortableText blocks={plainText} />

<PortableText blocks={formattedParagraphs} />

<PortableText blocks={unorderedLists} />
