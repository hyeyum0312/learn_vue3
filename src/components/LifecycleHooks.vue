<template>
  <div class="container py-4">
    <input type="text" ref="inputRef" value="hello" />
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';

export default {
  components: {},
  setup() {
    console.log('setup');
    const inputRef = ref(null);

    // Mounting: 컴포넌트 삽입 , onBeforeMount, onMounted
    // 초기 렌더링 직전에 DOM을 변경하고자한다면 이 단계에서 실행한다.

    onBeforeMount(() => {
      // 컴포넌트가 마운트 되기 직전에 실행한다. (권장X)
      console.log('onBeforeMount');
    });

    onMounted(() => {
      // 컴포넌트가 마운트된 직후에 사용한다. DOM에 접근이 가능하다.
      console.log('onMounted', inputRef.value.value);
    });

    return { inputRef };
  },

  // 예전에 이런것이 있었다.
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
};
</script>

<style lang="scss" scoped></style>
