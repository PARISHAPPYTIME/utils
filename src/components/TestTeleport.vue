<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'

</script>
<template>
    <div>
        <h1>我还在里面</h1>
    </div>
    <teleport to="#app">
        <div>
            <h1>我在body里面</h1>
            <HelloWorld msg="你好ua"></HelloWorld>
        </div>
    </teleport>
</template>