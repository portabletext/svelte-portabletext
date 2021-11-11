<script lang="ts">
  import type {PortableTextBlocks} from '$lib/ptTypes'

  import type {MarkProps} from '$lib/rendererTypes'

  export let portableText: MarkProps<{
    _key: string
    note: PortableTextBlocks
  }>
</script>

<span id="src-{portableText.mark._key}">
  <slot /><sup><a href={`#note-${portableText.mark._key}`}>†</a></sup>
</span>
