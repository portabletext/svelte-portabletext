<script lang="ts">
  import type {PortableTextBlocks} from '$lib/ptTypes'
  import PortableText from '$lib/PortableText.svelte'

  import type {BlockProps} from '$lib/rendererTypes'
  import Link from './Link.svelte'

  export let portableText: BlockProps<{
    title: string
    subtitle: PortableTextBlocks
    image: {
      extension: string
      url: string
      aspectRatio: number
    }
  }>

  $: block = portableText.block
</script>

<section>
  <div>
    <h1>{block.title}</h1>
    <div>
      <PortableText input={block.subtitle} serializers={{marks: {link: Link}}} />
    </div>
  </div>

  <img src={block.image.url} alt={' '} />
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
