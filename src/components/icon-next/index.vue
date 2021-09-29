<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<template>
    <div class="app-icon">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
.app-icon {
    width: 44px;
    height: 44px;
    border-radius: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    transition: all 0.25s;
    cursor: pointer;
    &:hover {
        background-color: rgb(230, 230, 230);
    }
}

.app-icon + .app-icon {
    margin-left: 14px;
}
</style>
