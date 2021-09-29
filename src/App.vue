<script lang="ts">
import { defineComponent, ref } from 'vue'
import { NConfigProvider, darkTheme, NMessageProvider } from 'naive-ui'
export default defineComponent({
    components: {
        NConfigProvider,
        NMessageProvider,
    },
    setup() {
        return {
            darkTheme,
            theme: ref(darkTheme),
        }
    },
})
// import { Button } from 'ant-design-vue'
// import { ref, onBeforeUpdate, watchEffect } from 'vue'
// // import type { InstanceType } from 'vue'

// import HelloWorld from '@/components/HelloWorld.vue'
// import TestTeleport from '@/components/TestTeleport.vue'
// import TestH from '@/components/TestH.vue'
// import TestJsx from '@/components/TestJsx'
// import TestFunctional from '@/components/TestFunctional'
// import TestRef from '@/components/TestRef.vue'

// // const list = reactive([1, 2, 3]);
// const divs = ref<any[]>([])

// // 确保在每次更新之前重置ref
// onBeforeUpdate(() => {
//     console.log(divs.value)
//     divs.value = []
// })

// const showCode = (id: number, value: string) => {
//     // list.splice(1, 1)
//     console.log(id, value)
// }

// const root = ref<InstanceType<typeof HelloWorld>>()
// const testRef = ref<InstanceType<typeof TestRef>>()

// watchEffect(
//     () => {
//         console.log(root.value?.onNest?.('2')) // => <div>This is a root element</div>
//         console.log(root.value)
//         console.log(testRef.value?.isSuccess('123'))
//         console.log(testRef.value?.name)
//     },
//     // 在组件渲染之后执行副作用函数
//     { flush: 'post' },
// )

// 解析指令
// const Permission = resolveDirective('permission');
// const Localhost = resolveDirective('localhost');
// console.log(Permission)
// console.log(Localhost)
</script>

<template>
    <n-config-provider :theme="theme">
        <n-message-provider>
            <router-view />
        </n-message-provider>
    </n-config-provider>
    <!-- <div v-permission="['1826709444']">这个部分只会在具有权限的时候会被看见</div>
    <div v-localhost>只会在本地开发的时候看见的元素1</div>
    <div v-localhost="false">只会在本地开发的时候看见的元素2</div>
    <Button>测试按需导入</Button>
    <router-view />
    <HelloWorld msg="YOU AE OK?" ref="root" @show-code="showCode" />
    <TestTeleport />
    <TestH :level="1">can you speak1</TestH>
    <TestH :level="3">can you speak3</TestH>
    <TestH :level="5">can you speak5</TestH>
    <TestJsx />
    <test-functional label="h1">
        <h1>1111</h1>
    </test-functional>
    <TestRef /> -->
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
