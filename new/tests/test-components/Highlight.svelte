<!-- Used by 052, 018 -->
<script lang="ts">
  import type {MarkComponentProps} from '../../src/lib/rendererTypes'

  export let portableText: MarkComponentProps<{thickness: number}>

  $: ({thickness} = portableText.value)
</script>

<span style="border:{thickness}px solid;">
  <slot />
</span>
