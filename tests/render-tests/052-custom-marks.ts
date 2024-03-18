import Rendered from './052-custom-marks.svelte';
import Highlight from '../test-components/Highlight.svelte';

export default {
	name: '052-custom-marks',
	rendered: Rendered,
	components: {
		marks: {
			highlight: Highlight
		}
	},
	value: [
		{
			_type: 'block',
			children: [
				{
					_key: 'a1ph4',
					_type: 'span',
					marks: ['mark1'],
					text: 'Sanity'
				}
			],
			markDefs: [
				{
					_key: 'mark1',
					_type: 'highlight',
					thickness: 5
				}
			]
		}
	]
};
