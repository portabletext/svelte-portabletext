<script lang="ts">
  import type {PortableTextBlock} from '@portabletext/types'
  import PortableText from '$lib/PortableText.svelte'

  import type {CustomBlockComponentProps} from '$lib/rendererTypes'
  import Link from './Link.svelte'

  type Props = {
    portableText: CustomBlockComponentProps<{
      title: string
      subtitle: PortableTextBlock[]
      image: {
        extension: string
        url: string
        aspectRatio: number
      }
    }>
  }

  let {portableText}: Props = $props()

  let {value} = $derived(portableText)
</script>

<section>
  <div>
    <h1>{value.title}</h1>
    <div>
      <PortableText value={value.subtitle} components={{marks: {link: Link}}} />
    </div>
  </div>

  <img src={value.image.url} alt={' '} />
</section>

<style>
  h1 {
    margin: 0;
  }
  h1 + div {
    flex: 1;
  }
  h1 + div > :global(p:first-of-type) {
    margin-top: 0;
  }

  img {
    flex: 1;
    max-width: 400px;
  }
  @media (min-width: 768px) {
    section {
      display: flex;
      align-items: center;
    }
  }
</style>
