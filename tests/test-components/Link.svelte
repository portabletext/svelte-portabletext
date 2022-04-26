<!-- Used by 053 -->
<script>
  export let portableText

  $: ({href} = portableText.mark || {})
</script>

<a class="mahlink" {href}>
  <slot />
</a>
