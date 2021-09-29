<script lang="ts">
import { defineComponent, h, resolveDynamicComponent } from 'vue'
import type { VNode, Slot } from 'vue'
// import HelleWorld from '@/components/HelloWorld.vue'
// import { Button } from 'ant-design-vue'

/** 递归地从子节点获取文本 */
function getChildrenTextContent(children: VNode[]): string {
    return children
        .map((node: VNode) => {
            return typeof node.children === 'string'
                ? node.children
                : Array.isArray(node.children)
                    ? getChildrenTextContent((node.children as VNode[]))
                    : ''
        })
        .join('')
}

export default defineComponent({
    // components: { Button },
    render() {
        // console.log(this.$slots.default)
        // 从 children 的文本内容中创建短横线分隔 (kebab-case) id。
        const headingId = getChildrenTextContent(this.$slots.default?.() || [])
            .toLowerCase()
            .replace(/\W+/g, '-') // 用短横线替换非单词字符
            .replace(/(^-|-$)/g, '') // 删除前后短横线

        const ButtonName = resolveDynamicComponent('Button')
        console.log(ButtonName)


        return h('h' + this.level,
            [
                h(
                    'a',
                    {
                        name: headingId,
                        href: '#' + headingId
                    },
                    this.$slots.default?.()
                )
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})
</script>
