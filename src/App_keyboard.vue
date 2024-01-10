<template>
  <div>
    <input type="text" @keyup="addTodos" />

    <!-- enter일때만 실행하세요 
      뿐만아니라 다양한 키수식어를 제공함 .
      .enter
      .tab
      .delete (”Delete”와 “Backspace” 키 모두를 수신합니다.)
      .esc
      .space
      .up
      .down
      .left
      .right
      .ctrl
      .alt
      .shift
      .meta
      .exact
-->
    <input type="text" @keyup.enter="addTodos" />
    <ul>
      <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const todos = reactive([]);
    const addTodos = event => {
      todos.push(event.target.value);
    };
    return { todos, addTodos };
  },
};
</script>

<style lang="scss" scoped>
.clickDiv {
  background-color: red;
}

.clickSpan {
  background-color: green;
}

.clickP {
  background-color: blue;
}
</style>
