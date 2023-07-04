import {   defineRule  } from 'vee-validate'

import { required, min, max, numeric } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('numeric', numeric)