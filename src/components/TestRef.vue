<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export interface Validate {
    (name: string): boolean;
  }

  export default defineComponent({
    setup() {
      const isSuccess: Validate = () => {
        return false;
      };
      const name = ref('');
      return { isSuccess, name };
    },
  });
</script>

<template>
  <div>
    <h1 @click="isSuccess('2')">测试 Ref</h1>
  </div>
</template>
