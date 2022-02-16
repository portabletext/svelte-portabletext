<script lang="ts">
  import type {MarkProps} from '$lib/rendererTypes'

  export let portableText: MarkProps
  $: console.log('Unkown mark: ', {
    mark: portableText.mark,
    span: portableText.span,
    parentBlock: portableText.parentBlock
  })
</script>

<span>
  I'm an unknown mark! Here's my content:
  <code><slot /></code> (see console for my values)
</span>
