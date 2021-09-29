import { } from 'vue'
import type { Directive } from 'vue'
import { isArray } from '@/utils/is'

const value = ['18267094444']

export const permissionDirective: Directive = {
    created() { },
    beforeMount() { },
    mounted(el: Node, binding) {
        const { value } = binding
        if (value && isArray(value)) {
            const permissionRoles = value
            const hasPermission = value.some(role => {
                return permissionRoles.includes(role)
            })
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el)
            }
        } else {
            throw new Error(`need roles! Like v-permission="['admin','editor']"`)
        }
    },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { }
}