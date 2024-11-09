<script lang="ts">
  import type {CustomBlockComponentProps} from '$lib/rendererTypes'

  type Props = {
    portableText: CustomBlockComponentProps<{
      image: {
        extension: string
        url: string
        aspectRatio: number
      }
      caption: string
    }>
  }

  let {portableText}: Props = $props()

  let {value} = $derived(portableText)
</script>

<figure>
  <img src={value.image.url} alt={value.caption} />

  <figcaption>{value.caption}</figcaption>
</figure>
