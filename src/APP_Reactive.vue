<template>
  <div>
    <p>{{ message.value }}</p>
    <button @click="addMessage">addMessage</button>
    <button @click="increment">Click {{ state.count }}</button>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      // 레퍼런스 타입을 반응형 객체로 만들 수 있다.
      count: 0,
      deep: {
        count: 0,
      },
    });

    // let message = reactive('hello'); // 값 자체를 바꾸기때문에 변경되지 않을 것 이다.
    let message = reactive({ value: 'hello' });

    const increment = () => {
      state.count++;
      state.deep.count++;
    };

    const addMessage = () => {
      message.value = message.value + '!';
    };

    return {
      message,
      state,
      increment,
      addMessage,
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
