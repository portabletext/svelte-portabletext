<script lang="ts">
  import type {PortableTextBlocks} from '$lib/ptTypes'

  import type {MarkProps} from '$lib/rendererTypes'

  interface FootnoteProps {
    _key: string
    note: PortableTextBlocks
  }

  export let portableText: MarkProps<
    FootnoteProps,
    // Use the second argument to specify your context's type
    {
      footnotes: FootnoteProps[]
    }
  >

  $: number =
    portableText.context.footnotes.findIndex((note) => note._key === portableText.mark._key) + 1
</script>

<span id="src-{portableText.mark._key}">
  <slot /><sup><a href={`#note-${portableText.mark._key}`}>{number}</a></sup>
</span>
