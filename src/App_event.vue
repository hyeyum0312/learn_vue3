<template>
  <div>
    <button @click="printEventInfo('조혜연', $event)">
      inline Event Handler
    </button>

    <input type="text" @keyup="onkeyupEvent($event)" />
  </div>
</template>

<script>
import {} from 'vue';

export default {
  setup() {
    const printEventInfo = (message, event) => {
      console.log('message', message); // message 조혜연
      // eslint-disable-next-line no-irregular-whitespace
      console.log('event', event.target); // event <button>​ inline Event Handler ​</button>​
      console.log('event', event.target.tagName); // event BUTTON
    };

    const onkeyupEvent = event => {
      console.log('event.key', event.key);
    };

    // event.preventDefault(), event.stopPropagation() 메소드안에서 비즈니스 외에 이러한 코드는 비효율적이다.
    // 이러한 문제를 해결하기 위해 vue는 다양한 수식어를 제공함

    // .stop = event.stopPropagation()
    // .prevent = event.preventDefault()
    // .capture 캡쳐모드를 사용할 때
    // .self = 오로지 자기 자신만 호출가능, 타깃 요소가 self 일 때 발동함
    // .once = 한번만 실행한다.
    // .passive = 일반적으로 모바일 장치의 성능을 개선하기 위해 터치이벤트 리스너와 함께 사용한다.

    return { printEventInfo, onkeyupEvent };
  },
};
</script>

<style lang="scss" scoped></style>
