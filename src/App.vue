<template>
  <form @submit.prevent>
    <input type="text" v-model.lazy="title" placeholder="타이틀" />
    <textarea v-model.lazy="contents"></textarea>
    <button @click="save(title, contents)">저장</button>
  </form>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  components: {},
  setup() {
    const title = ref('');
    const contents = ref('');

    // 글을 자동으로 저장 하게하려면 watchEffect를 사용하면된다.
    const save = (title, contents) => {
      // API호출해서 저장한다고 가정
      console.log(`저장되었습니다. title:${title}, contents: ${contents}`);
    };

    watchEffect(() => {
      save(title.value, contents.value);
    });
    return { title, contents, save };
  },
};

// watchEffect는 watch와는 다르게 최초 한번 즉시 실행한다.
// watch와 watchEffect는 둘 다 반응형데이터의 변경을 감지해서 관련작업을 반응적으로 수행할 수 있게한다. (ex: api호출, call, push 등 )
// watch는 명시적으로 관찰한다. (어떠한 데이터를 감시하겠다.), watch는 이전값, 현재값 모두 필요한 경우 사용한다.

// watchEffect는 callback함수 안에서 사용한 반응형 데이터를 감시한다. 그렇기 때문에 덜 명시적이다.watchEffect는 현재값만 필요할 때 사용한다.
// watchEffect는 watchEffect에 전달하는 콜백 메소드 안에 반응성을 가진 데이터를 사용하는 경우에만 호출된다.
// watchEffect()의 경우에는 Composition API에서만 사용이 가능하다.
// watchEffect 즉시 실행된다. computed처럼 안에 사용된 대상들의 변경을 감지하여 실행된다.
</script>

<style lang="scss"></style>
