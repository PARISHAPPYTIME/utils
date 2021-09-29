<script lang="ts">
import { defineComponent } from 'vue'
import { NMenu, useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const menuOptions = [
    {
        label: '同步文件',
        key: 'file',
    },
    {
        label: '同步内容',
        key: 'home',
    },
    {
        label: '地址收藏',
        key: 'home3',
    },
    {
        label: '图片收藏',
        key: 'home4',
    },
    {
        label: '且听风吟',
        key: 'home2',
    },
    {
        label: '1973年的弹珠玩具',
        key: 'about2',
    },
    {
        label: '寻羊冒险记',
        key: 'table',
    },
    {
        label: '舞，舞，舞',
        key: 'dance-dance-dance',
        children: [
            {
                label: '人物',
                key: 'people',
            },
            {
                label: '饮品',
                key: 'beverage',
            },
            {
                label: '食物',
                key: 'food',
            },
            {
                label: '过去增多，未来减少',
                key: 'table',
            },
        ],
    },
]

export default defineComponent({
    components: { NMenu },
    setup() {
        // const message = useMessage()
        const router = useRouter()
        const handleUpdateValue = (key, item) => {
            router.push({ path: '/' + key })
            console.log(key, item)
        }
        return {
            menuOptions,
            defaultExpandedKeys: ['dance-dance-dance', 'food'],
            handleUpdateExpandedKeys(keys) {
                // message.info('[onUpdate:expandedKeys]: ' + JSON.stringify(keys))
            },
            handleUpdateValue,
        }
    },
})
</script>

<template>
    <n-menu
        :options="menuOptions"
        default-expand-all
        @update:expanded-keys="handleUpdateExpandedKeys"
        @update:value="handleUpdateValue"
    />
</template>

<style lang="less" scoped></style>
