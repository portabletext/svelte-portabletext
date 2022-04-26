<!-- Used by 052, 018 -->
<script>
  export let portableText

  $: ({thickness} = portableText.mark || {})
</script>

<span style="border:{thickness}px solid;">
  <slot />
</span>
