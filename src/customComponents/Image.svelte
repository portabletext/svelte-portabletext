<script lang="ts">
  import type {BlockProps} from '$lib/rendererTypes'

  export let portableText: BlockProps<{
    image: {
      extension: string
      url: string
      aspectRatio: number
    }
    caption: string
  }>

  $: ({block} = portableText)
</script>

<figure>
  <img src={block.image.url} alt={block.caption} />

  <figcaption>{block.caption}</figcaption>
</figure>
