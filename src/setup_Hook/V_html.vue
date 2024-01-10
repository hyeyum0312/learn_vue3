<template>
  <div>
    <h2>HTML</h2>
    <div>{{ message }}</div>
    <div v-html="rawHtml"></div>
    <button @click="increment">Click!</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const message = ref('Hello');
    const rawHtml = ref(`<strong>안녕하세요</strong>`);
    // 웹사이트에서 임의의 HTML을 동적으로 렌더링 하면 XSS취약점으로 쉽게 이어질 수 있는 소지가 있다.
    // 신뢰할 수 있는 콘텐츠에서만 사용할것 , 사용자가 제공한 콘텐츠에서는 사용해선 안된다.

    return { message, rawHtml };
  },
};
</script>

<style lang="scss" scoped></style>
