<template>
  <div>Hello World!</div>
  <button @click="increment">Counter: {{ counter }}</button>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    onMounted(() => {
      console.log('컴포넌트가 마운티드 되었습니다.');
    });

    return { counter, increment };
  },
};
</script>

<style lang="scss" scoped></style>

<!-- 
    - hook 사용하여 관련 코드조각을 함께 그룹화한다. (코드 분석과 유지보수 용이)
    - Composable을 사용하면 애플리케이션 전체에서 코드를 쉽게 재사용 할 수 있다.
 -->
