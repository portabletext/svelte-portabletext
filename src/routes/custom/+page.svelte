<script lang="ts">
  import PortableText from '$lib/PortableText.svelte'
  import Hero from '../../customComponents/Hero.svelte'
  import Code from '../../customComponents/Code.svelte'
  import Image from '../../customComponents/Image.svelte'
  import blocks from '../../dummyData/custom'
  import Greeter from '../../customComponents/Greeter.svelte'
  import Abbreviation from '../../customComponents/Abbreviation.svelte'
  import Fun from '../../customComponents/Fun.svelte'
  import Link from '../../customComponents/Link.svelte'
  import Footnote from '../../customComponents/Footnote.svelte'
  import SingleComponentBlock from '../../customComponents/SingleComponentBlock.svelte'

  let footnotes = $derived(
    blocks.reduce((notes: any[], curBlock) => {
      if (curBlock._type !== 'block' || !curBlock.markDefs?.length) {
        return notes
      }
      return [...notes, ...curBlock.markDefs.filter((def) => def._type === 'footnote')]
    }, [] as any[])
  )
</script>

<PortableText
  value={blocks}
  components={{
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
        value={note.note}
        components={{
          block: SingleComponentBlock,
          marks: {
            link: Link
          }
        }}
      />
      <a href="#src-{note._key}">👆</a>
    </li>
  {/each}
</ol>
