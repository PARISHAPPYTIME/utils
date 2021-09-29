<script lang="ts">
import { defineComponent } from 'vue'
import { NInput, NButton, NSpace, NSlider } from 'naive-ui'
// import { useCounterStore } from '@/store/countStore'
// const store = useCounterStore()
export default defineComponent({
    components: { NInput, NButton, NSpace, NSlider },
    setup() {
        const add = () => {
            // store.increment()
        }
        return { add }
    },
})
// import { server } from '@/utils/http/simple'
//
// interface Res<T> {
//     code: number
//     message: string
//     data: T
// }
//
// server<Res<any[]>>({
//     url: 'api/test',
//     method: 'post',
//     params: {},
// }).then((res) => {
//     console.log(res.data)
//     console.log(res.code)
//     console.log(res.message)
// })
</script>

<template>
    <n-button @click="add" type="primary"> 共享同步 </n-button>
    <n-space vertical>
        <n-slider v-model:value="value" :tooltip="false" />
    </n-space>
    <h1>About</h1>
</template>
