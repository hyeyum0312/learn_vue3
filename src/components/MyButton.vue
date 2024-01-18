<template>
  <div class="p-3 bg-danger">
    <button class="btn btn-primary" type="button" @click="sayHello">
      My Button
    </button>
  </div>
</template>

<script>
import {} from 'vue';
export default {
  components: {},
  emit: ['click'],
  //   inheritAttrs: false, //  props에 정의 하지 않은 none-props를 사용하고 싶지 않다면! , 상속을 원하는 엘리먼트에 넣어준다. v-bind="$attrs"
  setup(props, { emit }) {
    const sayHello = () => {
      emit('sayHello');
    };
    return { sayHello };
  },
};
// props에 정의 하지 않은 none-props를 사용하게되면 최종 렌더링은 root엘리먼트에 상속이된다. class와 style에 이미 정의 되어있다면 속성과 병합한다.
// v-on 이벤트 리스너도 상속한다.
</script>

<style lang="scss" scoped></style>
