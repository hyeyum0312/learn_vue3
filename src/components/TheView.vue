<template>
  <div class="d-grid gap-2">
    <button class="btn btn-primary" type="button">Button1</button>
    <button class="btn btn-primary" type="button">Button2</button>
    <MyButton @sayHello="sayHello"></MyButton>
    <slot>
      <FancyButton><span>slot버튼</span></FancyButton>
      <FancyButton></FancyButton>
    </slot>
  </div>
  <LabelInput
    v-model="userName"
    label="이름"
    class="non-class"
    style="color: red"
    id="아이디"
  ></LabelInput>
</template>

<script>
import {} from 'vue';

import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LableInput.vue';
import FancyButton from '@/components/FancyButton.vue';
export default {
  components: { LabelInput, MyButton, FancyButton },
  setup() {
    const sayHello = () => {
      alert('안녕하세요');
    };
    return { LabelInput, sayHello };
  },
};

// props에 정의 하지 않은 none-props를 사용하게되면 최종 렌더링은 root엘리먼트에 상속이된다. class와 style에 이미 정의 되어있다면 속성과 병합한다.
// v-on 이벤트 리스너도 상속한다.
</script>

<style lang="scss" scoped></style>
