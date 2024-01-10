<template>
  <div></div>
  <App_Ref></App_Ref>
</template>

<script>
import App_Ref from './App_Ref.vue';
import { ref, reactive } from 'vue';

export default {
  components: { App_Ref },
  setup() {
    // Ref -> Obj
    const count = ref(0);
    const state = reactive({
      count,
    });

    console.log('state', state.count);
    //console.log('count', count.value);
    //console.log('state.count.value', state.count.value); // ref로 연결되어있어서 value를 입력하지 않아도된다.

    // Ref -> Array (반응형 상태를 배열에 넣었을땐 value)
    const message = ref('Hello');
    const arr = reactive([message]);
    console.log('arr', arr[0].value); // 배열에 접근하기 위해서는 여기선 .value가 붙는다.
  },
};
</script>

<style lang="scss" scoped></style>
