<template><div></div></template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    //Reactivity(반응성): reactive로 만들어진 객체의 속성이 변경될 때마다 해당 변경사항이 감지되어 자동으로 연결된 컴포넌트가 업데이트됩니다.
    // 활용: reactive 함수를 사용하여 객체나 배열을 반응형으로 만들 수 있습니다.
    const state = reactive({
      count: 0,
    });
    console.log('state', state);

    // ref : Vue.js에서 기본적으로 제공하는 원시 값(primitive values)이나 객체를 감싸는 래퍼입니다
    // 활용: ref 함수를 사용하여 변수를 감싸거나, 컴포넌트 내에서 ref 속성을 사용하여 DOM 엘리먼트에 접근할 수 있습니다.
    // ref로 만들어진 변수는 .value 속성을 통해 실제 값을 접근하고 수정할 수 있습니다. 또한, ref를 사용한 변수는 일반 자바스크립트 변수처럼 취급됩니다.
    const count = ref(0);
    console.log('count', count);

    // 차이점:
    // reactive는 객체나 배열을 반응형으로 만들 때 사용되며, 객체 내의 속성이 변경될 때마다 업데이트가 감지됩니다.
    // ref는 변수나 원시 값, DOM 엘리먼트를 감싸는 데 사용되며, 값의 변경 여부와 상관없이 .value를 통해 직접 접근이 가능합니다.
    // 일반적으로, 상태의 변경 여부에 따라 선택하면 됩니다. 객체나 배열의 경우 reactive를 사용하고, 원시 값이나 DOM 엘리먼트 등을 다룰 때는 ref를 사용하는 것이 보편적입니다.
  },
};
</script>

<style lang="scss" scoped></style>
