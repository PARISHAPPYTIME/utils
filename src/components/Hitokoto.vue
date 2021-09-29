<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { server } from '@/utils/http/simple'
import { useNotification } from 'naive-ui'
interface Res {
    uuid: string
    hitokoto: string
    from: string
}
export default defineComponent({
    setup() {
        const notification = useNotification()
        const init = () => {
            server<Res>({
                url: 'https://v1.hitokoto.cn/',
            }).then((res) => {
                notification.create({
                    content: res.hitokoto,
                })
            })
        }
        onMounted(init)
    },
})
</script>

<template>
    <span></span>
</template>
