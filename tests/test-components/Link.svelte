<!-- Used by 053 -->
<script lang="ts">
  import type {MarkComponentProps} from '../../src/lib/rendererTypes'

  type Props = {
    portableText: MarkComponentProps<{href: string}>
    children?: import('svelte').Snippet
  }

  let {portableText, children}: Props = $props()

  let {href} = $derived(portableText.value)
</script>

<a class="mahlink" {href}>
  {@render children?.()}
</a>
