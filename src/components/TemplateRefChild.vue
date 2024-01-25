<template>
  <div class="container py-4">{{ sayHello }}</div>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('hello');
const sayHello = () => {
  console.log('sayHello', message);
  // alert(message.value);
};

defineExpose({
  sayHello,
  message,
});
</script>

<style lang="scss" scoped></style>
