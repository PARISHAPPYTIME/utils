<script lang="ts">
import Menu from '@/components/Menu/index.vue'
import { defineComponent, ref } from 'vue'
import { NLayout, NLayoutSider, NLayoutContent, NScrollbar, NNotificationProvider } from 'naive-ui'
import Hitokoto from '@/components/Hitokoto.vue'
export default defineComponent({
    components: {
        NLayout,
        NLayoutSider,
        NLayoutContent,
        NScrollbar,
        NNotificationProvider,
        Menu,
        Hitokoto,
    },
    setup() {
        return {}
    },
})
</script>

<template>
    <div class="app-container">
        <n-layout has-sider>
            <n-layout-sider
                collapse-mode="transform"
                :collapsed-width="20"
                :width="240"
                :trigger-style="{
                    top: '240px',
                }"
                :collapsed-trigger-style="{
                    top: '240px',
                }"
                show-trigger="arrow-circle"
                bordered
            >
                <n-scrollbar>
                    <Menu />
                </n-scrollbar>
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;">
                <n-notification-provider>
                    <Hitokoto />
                    <n-scrollbar>
                        <router-view />
                    </n-scrollbar>
                </n-notification-provider>
            </n-layout-content>
        </n-layout>
    </div>
</template>

<style>
.n-layout {
    height: 100%;
}
</style>
