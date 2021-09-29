<script setup lang="ts">
  defineProps<{ msg: string }>();
  const emit = defineEmits<{
    (e: 'showCode', id: number, value: string): void;
    (e: 'nest', name: string): void;
  }>();

  const showCode = () => {
    emit('showCode', 1, '2');
  };

  defineExpose({
    name: '123',
  });
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="showCode">尝试动态参数</button>
</template>
