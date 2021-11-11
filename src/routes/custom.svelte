<script>
  import PortableText from '$lib/PortableText.svelte'
  import Hero from '../customComponents/Hero.svelte'
  import Code from '../customComponents/Code.svelte'
  import Image from '../customComponents/Image.svelte'
  import blocks from '../dummyData/custom'
  import Greeter from '../customComponents/Greeter.svelte'
  import Abbreviation from '../customComponents/Abbreviation.svelte'
  import Fun from '../customComponents/Fun.svelte'
  import Link from '../customComponents/Link.svelte'
  import Footnote from '../customComponents/Footnote.svelte'

  $: footnotes = blocks.reduce((notes, curBlock) => {
    if (curBlock._type !== 'block' || !curBlock.markDefs?.length) {
      return notes
    }
    return [...notes, ...curBlock.markDefs.filter((def) => def._type === 'footnote')]
  }, [])

  $: console.log(footnotes)
</script>

<PortableText
  {blocks}
  serializers={{
    types: {
      image: Image,
      code: Code,
      hero: Hero,
      greeter: Greeter
    },
    marks: {
      abbreviation: Abbreviation,
      fun: Fun,
      link: Link,
      footnote: Footnote
    }
  }}
  context={{
    footnotes
  }}
/>

<ol style="margin-top: 50vh">
  {#each footnotes as note}
    <li id="note-{note._key}">
      <PortableText
        blocks={note.note}
        serializers={{
          marks: {
            link: Link
          }
        }}
      />
      <a href="#src-{note._key}">👆</a>
    </li>
  {/each}
</ol>
