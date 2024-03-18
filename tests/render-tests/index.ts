import type { InputValue } from '../../src/lib/ptTypes';
import type { PortableTextComponents } from '../../src/lib/rendererTypes';

import test001 from './001-empty-block.js';
import test002 from './002-single-span.js';
import test003 from './003-multiple-spans.js';
import test004 from './004-basic-mark-single-span.js';
import test005 from './005-basic-mark-multiple-adjacent-spans.js';
import test006 from './006-basic-mark-nested-marks.js';
import test007 from './007-link-mark-def.js';
import test008 from './008-plain-header-block.js';
import test009 from './009-messy-link-text.js';
import test010 from './010-basic-bullet-list.js';
import test011 from './011-basic-numbered-list.js';
import test014 from './014-nested-lists.js';
import test015 from './015-all-basic-marks.js';
import test016 from './016-deep-weird-lists.js';
import test017 from './017-all-default-block-styles.js';
import test018 from './018-marks-all-the-way-down.js';
import test019 from './019-keyless.js';
import test020 from './020-empty-array.js';
import test021 from './021-list-without-level.js';
import test023 from './023-hard-breaks.js';
import test026 from './026-inline-block-with-text.js';
import test027 from './027-styled-list-items.js';
import test052 from './052-custom-marks.js';
import test053 from './053-override-default-marks.js';
import test061 from './061-missing-mark-serializer.js';

interface RenderTestFile {
	value: InputValue;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	rendered: any;
	name: string;
	components?: PortableTextComponents;
}

export default [
	test001,
	test002,
	test003,
	test004,
	test005,
	test006,
	test007,
	test008,
	test009,
	test010,
	test011,
	test014,
	test015,
	test016,
	test017,
	test018,
	test019,
	test020,
	test021,
	test023,
	test026,
	test027,
	test052,
	test053,
	test061
] as RenderTestFile[];
