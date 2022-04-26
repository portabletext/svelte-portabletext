<!-- Used by 026 -->
<script>
  export let portableText

  $: ({text} = portableText.block)
</script>

<button>
  {text}
</button>
