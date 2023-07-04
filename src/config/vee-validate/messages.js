import { localize } from '@vee-validate/i18n'
import en from "@vee-validate/i18n/dist/locale/en.json "
import { configure } from 'vee-validate'

localize({
    messages: {
        required: 'This field is required',
        min: 'This field must be at least {length} characters',
        max: 'This field must be at most {length} characters',
        numeric: 'This field must be a number',
    },
})

configure({
    generateMessage: localize({
        en
    }),
})