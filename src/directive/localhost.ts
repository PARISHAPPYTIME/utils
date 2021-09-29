import { } from 'vue'
import type { Directive } from 'vue'

import { isDev } from '@/utils/util'

export const localhostDirective: Directive = (el: Node, binding) => {
    const { value } = binding
    if (!isDev && value !== false) {
        el.parentNode && el.parentNode.removeChild(el)
    }
}