<script>
  import PortableText from '$lib/PortableText.svelte'
  import CustomHardBreak from '../../customComponents/CustomHardBreak.svelte'
</script>

<PortableText
  value={[
    {
      _type: 'block',
      _key: 'bd73ec5f61a1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'A paragraph\ncan have hard\n\nbreaks.',
          marks: []
        }
      ]
    }
  ]}
/>

<PortableText
  value={[
    {
      _type: 'block',
      _key: 'bd73ec5f61a1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'A paragraph\ncan have hard\n\nbreaks. This one was disabled, though.',
          marks: []
        }
      ]
    }
  ]}
  components={{
    hardBreak: false
  }}
/>

<PortableText
  value={[
    {
      _type: 'block',
      _key: 'bd73ec5f61a1',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          text: 'A paragraph\ncan have hard\n\nbreaks. This one is custom.',
          marks: []
        }
      ]
    }
  ]}
  components={{
    hardBreak: CustomHardBreak
  }}
/>
