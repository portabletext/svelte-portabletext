import type {InputValue} from '../../src/lib/ptTypes'

import test001 from './001-empty-block'
import test002 from './002-single-span'
import test003 from './003-multiple-spans'
import test004 from './004-basic-mark-single-span'
import test005 from './005-basic-mark-multiple-adjacent-spans'
import test006 from './006-basic-mark-nested-marks'
import test007 from './007-link-mark-def'
import test008 from './008-plain-header-block'
import test009 from './009-messy-link-text'
import test010 from './010-basic-bullet-list'
import test011 from './011-basic-numbered-list'
import test014 from './014-nested-lists'
import test015 from './015-all-basic-marks'
import test016 from './016-deep-weird-lists'
import test017 from './017-all-default-block-styles'
import test018 from './018-marks-all-the-way-down'
import test019 from './019-keyless'
import test020 from './020-empty-array'
import test021 from './021-list-without-level'
import test023 from './023-hard-breaks'
import test026 from './026-inline-block-with-text'
import test027 from './027-styled-list-items'
import test052 from './052-custom-marks'
import test053 from './053-override-default-marks'
import test060 from './060-list-issue'
import test061 from './061-missing-mark-serializer'

interface RenderTestFile {
  value: InputValue
  rendered: any
  name: string
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
  test060,
  test061
] as RenderTestFile[]
