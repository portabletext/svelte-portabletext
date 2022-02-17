<script>
  import PortableText from '$lib/PortableText.svelte'
  import CustomList from '../customComponents/CustomList.svelte'
  import CustomListItem from '../customComponents/CustomListItem.svelte'
  import blocks from '../dummyData/listStressTest'
</script>

<PortableText
  input={blocks}
  components={{
    list: {
      customList: CustomList
    },
    listItem: {
      customList: CustomListItem
    }
  }}
/>
