<script lang="ts">
import './index.less'
import { defineComponent } from 'vue'
import CommonList from './commonList.vue'
export default defineComponent({
    components: { CommonList },
})
</script>

<template>
    <div class="common-query mt16"></div>
    <div class="common-table mt16">
        <CommonList />
    </div>
    <div class="common-footer"></div>
</template>
