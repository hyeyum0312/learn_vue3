<template>
  <div>{{ msg }}</div>
  <hr />
  {{ message }}
  <input v-model="message" type="text" />
  <button @click="sayHello">버튼</button>
  <PostIndex></PostIndex>
  <hr />
  <TemplateRefChild ref="child"></TemplateRefChild>
  <template v-if="child">{{ child.message }}</template>
</template>

<script setup>
import { ref } from 'vue';
import PostIndex from '@/components/PostIndex.vue';
import TemplateRefChild from './TemplateRefChild.vue';
const msg = ref('hello world');
const message = ref('');
const sayHello = () => {
  alert('Hello wordl');
};
const child = ref(null);

defineExpose({
  msg,
  message,
  sayHello,
});
console.log('msg', msg);
</script>

<style lang="scss" module></style>
