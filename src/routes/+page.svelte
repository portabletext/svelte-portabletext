<script lang="ts">
  import PortableText from '$lib/PortableText.svelte'
  import type {Component, SvelteComponent} from 'svelte'
  import homepage from '../dummyData/homepage'

  let comp = $state<SvelteComponent<any>>()
</script>

<PortableText bind:this={comp} value={homepage} />
