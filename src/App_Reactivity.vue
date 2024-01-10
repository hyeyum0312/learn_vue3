<template>
  <div></div>
</template>

<script>
import { isRef } from 'vue';

export default {
  setup() {
    let foo;
    if (isRef(foo)) {
      // foo의 타입은 Ref<unknown>으로 한정됨
      foo.value;
      console.log('foo.value;', foo.value);
    }

    // function useFoo(x: number | Ref<number>) {
    //     const unwrapped = unref(x)
    // // unwrapped는 이제 확실히 숫자 입니다
    // }

    return {
      foo,
    };
  },
};
</script>

<style lang="scss" scoped></style>

<!-- 
    reactive : 
      객체 타입에만 동작한다.
      기본타입 (number,boolean,string)을 반응형으로 만들고자 할 때 ref메소드를 사용할 수 있다.
  
    ref : 
      변이 가능한 객체를 반환한다. 
      이 객체 안에는 value라는 하나의 속성만 포함되는데 value값은 ref() 메서드에서 매개변수로 받은 값을 가지고있다. 
      이 객체는 내부의 value값에 대한 반응형 참조(reference)역할을 한다.
   -->
