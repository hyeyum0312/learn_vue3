<template><div></div></template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
  components: {},
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });

    const person = reactive({
      name: '조혜연',
      age: 32,
      hobby: '운동',
      obj: { count: 0 },
    });

    watch(
      () => x.value + y.value, // 첫번째 매개변수로 getter함수를 넣어줌으로써 두수의 합을 반환할 수 있다.
      (newValue, oldValue) => {
        // getter함수에 의해 감지가 되었을 때 값을 받을 수 있음.
        console.log('newValue', newValue, oldValue);
      },
    );

    // 배열을 넣어줄 수도 있다.
    watch([x, y], ([newValue, oldValue]) => {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
    });

    // reactive를 매개변수로 넣어줄 수도 있다.
    watch(obj, (newValue, oldValue) => {
      // newValue, oldValue : 여기서는 같은 객체를 가리키기 때문에 같은 값이다.
      // 반응형 객체를 직접 watch()하면 암시적으로 깊은 감시자가 생긴다. 즉 속성 뿐만 아니라 모든 중첩된 속성 (속성의 속성) 에도 트리거된다.
      // cute: {animal:{dog:0 }}
      console.log('newValue', newValue, oldValue);
    });

    // 만약 obj가 아닌 , count하나만 감지하고싶다면? getter함수를 넣어주면 된다.
    watch(
      () => obj.count,
      (newValue, oldValue) => {
        console.log('newValue', newValue, oldValue);
      },
    );

    watch(person, (newValue, oldValue) => {
      console.log('newValue', newValue, oldValue);
      // obj의 count값을 변경해도 deep하게 감지한다.
    });

    watch(
      () => person.obj,
      (newValue, oldValue) => {
        // person.obj의 값이 변할때만 감지한다.
        console.log('newValue', newValue, oldValue);
      },
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss"></style>
