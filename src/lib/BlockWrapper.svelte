<script lang="ts">
  import type {PTBlock, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let index: number
  export let blocks: PTBlock[]
  export let block: PTBlock
  export let serializers: Serializers = undefined

  $: style = block.style || 'normal'

  $: customStyle = serializers?.blockStyles?.[style] || undefined
</script>

{#if customStyle}
  <svelte:component this={customStyle} node={block} {index} {blocks}>
    <slot />
  </svelte:component>
{:else if style === 'h1'}
  <h1><slot /></h1>
{:else if style === 'h2'}
  <h2><slot /></h2>
{:else if style === 'h3'}
  <h3><slot /></h3>
{:else if style === 'h4'}
  <h4><slot /></h4>
{:else if style === 'h5'}
  <h5><slot /></h5>
{:else if style === 'h6'}
  <h6><slot /></h6>
{:else if style === 'blockquote'}
  <blockquote><slot /></blockquote>
{:else if style === 'normal'}
  <p><slot /></p>
{:else}
  <ReportError message="Style {style} has no compatible renderer (block {block._key})" />
{/if}
