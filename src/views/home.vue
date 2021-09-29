<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
    NInput,
    NButton,
    NSpace,
    NSpin,
    NIcon,
    useMessage,
    NAlert,
    NUpload,
    NUploadDragger,
    NP,
} from 'naive-ui'
import { CheckmarkSharp, CloseSharp, CloudUploadOutline } from '@vicons/ionicons5'
// import { useCounterStore } from '@/store/countStore'
// const store = useCounterStore()
export default defineComponent({
    components: {
        NInput,
        NButton,
        NSpace,
        NSpin,
        NIcon,
        NUpload,
        NAlert,
        NUploadDragger,
        CloudUploadOutline,
        NP,
        CheckmarkSharp,
        CloseSharp,
    },
    setup() {
        const show = ref(false)
        const message = useMessage()
        const add = () => {
            show.value = true
            console.log(1)
            setTimeout(() => {
                show.value = false
                message.success('共享同步完成')
            }, 3000)
            // store.increment()
        }
        const fileListRef = ref([
            {
                id: 'url-test',
                name: 'URL 测试',
                url: 'https://www.mocky.io/v2/5e4bafc63100007100d8b70f',
                status: 'finished',
            },
            {
                id: 'text-message',
                name: '你的短信',
                status: 'error',
            },
            {
                id: 'notification',
                name: '你的通知',
                status: 'finished',
            },
            {
                id: 'contact',
                name: '你的联系人信息',
                status: 'finished',
            },
        ])
        return {
            add,
            show,
            fileList: fileListRef,
            handleUploadChange({ fileList }) {
                fileListRef.value = fileList
            },
            handleRemove({ file, fileList }) {
                if (file.id === 'text-message') {
                    message.info('居然没传上去，算了，删了吧')
                } else if (file.id === 'notification') {
                    message.error('不行，这个有用，不许删')
                    return false
                } else if (file.id === 'contact') {
                    message.loading('不知道这个有没有用，等我问问服务器能不能删', {
                        duration: 4000,
                    })
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            message.error('不行，他们也不许删这个')
                            resolve(false)
                        }, 4000)
                    })
                }
            },
            handleFileListChange(value) {
                message.info('是的，file-list 的值变了')
            },
        }
    },
})
</script>

<template>
    <n-space vertical>
        <n-alert title="Warning" type="warning"> 可能出现了某些异常，请先检查一下网络。 </n-alert>
        <n-spin :show="show">
            <n-input
                type="textarea"
                placeholder="内容"
                :autosize="{
                    minRows: 12,
                }"
            />
        </n-spin>
        <n-space class="v-center">
            <n-button @click="add" type="primary"> 共享同步 </n-button>
            <n-icon>
                <checkmark-sharp :font-size="28" color="#0c7a43" />
            </n-icon>
            <n-icon size="40">
                <close-sharp :font-size="28" color="#d03050" />
            </n-icon>
        </n-space>
    </n-space>
</template>
