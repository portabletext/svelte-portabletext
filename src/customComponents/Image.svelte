<script lang="ts">
  import type {BlockComponentProps} from '$lib/rendererTypes'

  export let portableText: BlockComponentProps<{
    image: {
      extension: string
      url: string
      aspectRatio: number
    }
    caption: string
  }>

  $: ({value} = portableText)
</script>

<figure>
  <img src={value.image.url} alt={value.caption} />

  <figcaption>{value.caption}</figcaption>
</figure>
