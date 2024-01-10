<template>
  <div>
    <p>메세지:{{ message }}</p>
    <button @click="addMessage">버튼</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue!');

    const addMessage = () => {
      message.value = message.value + '!';
    };

    return {
      message,
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
