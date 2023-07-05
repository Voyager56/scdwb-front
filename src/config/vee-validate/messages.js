import { localize } from '@vee-validate/i18n'
import { configure } from 'vee-validate'

configure({
    generateMessage: localize('en', {
        messages: {
            required: '{field} is required',
            min: '{field} must be at least 0:{min} characters',
            max: '{field} must be at most 1:{max} characters',
            numeric: '{field} must be a number',
        },
    }),
})