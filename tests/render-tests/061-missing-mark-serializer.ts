import Rendered from './061-missing-mark-serializer.svelte';

export default {
	name: '061-missing-mark-serializer',
	rendered: Rendered,
	value: [
		{
			_type: 'block',
			children: [
				{
					_key: 'cZUQGmh4',
					_type: 'span',
					marks: ['abc'],
					text: 'A word of '
				},
				{
					_key: 'toaiCqIK',
					_type: 'span',
					marks: ['abc', 'em'],
					text: 'warning;'
				},
				{
					_key: 'gaZingA',
					_type: 'span',
					marks: [],
					text: ' Sanity is addictive.'
				}
			],
			markDefs: []
		}
	]
};
