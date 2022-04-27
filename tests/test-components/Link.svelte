<!-- Used by 053 -->
<script lang="ts">
  import type {MarkComponentProps} from '../../src/lib/rendererTypes'

  export let portableText: MarkComponentProps<{href?: string}>

  $: ({href} = portableText.markDef || {})
</script>

<a class="mahlink" {href}>
  <slot />
</a>
