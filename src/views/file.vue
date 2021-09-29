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
        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" multiple>
            <n-upload-dragger>
                <div style="margin-bottom: 12px">
                    <n-icon :depth="3">
                        <cloud-upload-outline :font-size="48" />
                    </n-icon>
                </div>
                <n-text style="font-size: 16px">点击或者拖动文件到该区域来上传</n-text>
                <n-p depth="3" style="margin: 8px 0 0 0"
                    >请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码</n-p
                >
            </n-upload-dragger>
        </n-upload>
    </n-space>
</template>
