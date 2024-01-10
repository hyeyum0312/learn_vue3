<template>
  <div>
    <h2>보간법</h2>
    <!-- 동적으로 변경된다. -->
    <div>{{ message }}</div>
    <!-- 동적으로 변경되지 않는다. -->
    <div v-once>{{ message }}</div>
    <button @click="increment">Click!</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const message = ref('Hello');
    const increment = () => message.value + '!';

    return { message, increment };
  },
};
</script>

<style lang="scss" scoped></style>
