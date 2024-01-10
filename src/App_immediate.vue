<template><div></div></template>

<script>
import { ref, watch } from 'vue';

export default {
  components: {},
  setup() {
    const message = ref('hello Vue2');
    const reverseMessage = ref('');

    watch(
      message,
      newValue => {
        reverseMessage.value = newValue.split('').reverse().join('');
      },
      { immediate: true }, // 바로 변경되어야 할 경우, 최초한번 즉시 실행됨
    );

    const reverseFunc = newValue => {
      reverseMessage.value = newValue.split('').reverse().join('');
    };

    //결과는 동일하지만 위와는 다른 방식
    watch(message, reverseFunc);
    reverseFunc(message.value);

    return { message, reverseMessage, reverseFunc };
  },
};

//computed:  반응형데이터의 종속관계를 자동으로 셋팅하고자 할 때 (예를들면 reverseMessage는 message에 따라서 어떤 값을 셋팅 해야한다면.)
//watch:  반응형 데이터가 변경되는 시점에 dom을 변경한다거나 api를 호출해서 또 다른 특정 비즈니스 로직을 실행해야하는 등의 복잡한 로직을 수행 할 때
//watchEffect: 콜백함수 안의 반응형데이터에 변화가 감지되면 자동으로 반응하여 실행한다. 컴포넌트가 생성될 때 즉시 실행됨
</script>

<style lang="scss"></style>
