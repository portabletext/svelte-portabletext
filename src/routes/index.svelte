<script>
  import PortableText from '$lib/PortableText.svelte'
  import plainText from '../dummyData/plainText'
  import formattedParagraphs from '../dummyData/formattedParagraphs'
  import lists from '../dummyData/lists'
</script>

<h1>Svelte Portable Text</h1>

<PortableText blocks={plainText} />

<PortableText blocks={formattedParagraphs} />

<PortableText blocks={lists} />
