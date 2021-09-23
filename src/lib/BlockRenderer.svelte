<script lang="ts">
  import BlockSpan from './BlockSpan.svelte'
  import BlockWrapper from './BlockWrapper.svelte'
  import type {PTBlock, Serializers} from './ptTypes'
  import ReportError from './ReportError.svelte'

  export let index: number
  export let blocks: PTBlock[]
  export let block: PTBlock
  export let serializers: Serializers = undefined
</script>

<BlockWrapper {block} {serializers} {index} {blocks}>
  {#each block.children as child (child._key)}
    {#if serializers?.types?.[child._type]}
      <!-- Custom inline element -->
      <svelte:component this={serializers.types[child._type]} {block} node={child} />
    {:else if child._type === 'span'}
      <!-- Regular span / text child -->
      <BlockSpan span={child} {block} {serializers}>{child.text}</BlockSpan>
    {:else}
      <ReportError
        message="Block child of type {child._type} has no compatible renderer (child {child._key} in block {block._key})"
      />
    {/if}
  {/each}
</BlockWrapper>
