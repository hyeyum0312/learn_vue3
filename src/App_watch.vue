<template><div></div></template>

<script>
import { ref, watch } from 'vue';

export default {
  components: {},
  setup() {
    const message = ref('');

    watch(message, (newValue, oldValue) => {
      // DOM조작 하거나
      // API를호출해서 또다른 반응형 상태(state)를 변경할 때 사용하는 API
      // watch의 첫번째 매개변수는 ref,reactive,computed,getter함수, array가 될 수 있다.
      console.log('newValue', newValue, oldValue);
    });
    return { message };
  },
};
</script>

<style lang="scss"></style>
