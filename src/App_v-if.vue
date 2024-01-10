<template>
  <div>
    <!-- 조건에 따라 여러개가 변경되어야 하는 경우 template를 사용하면된다, -->
    <template v-if="visible">
      <h1>title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

    <h1 v-if="ok">title입니다.</h1>
    <h1 v-show="ok">title입니다.</h1>

    <!-- 
      하나의 엘리먼트에 v-if와 v-for을 함께 쓰는것을 권장하지 않는다. 
      <div v-if="useId" v-for="user in user" :key="user.id"></div>

      만약 사용하고싶다면 필터링된 목록을 v-for로 뿌려줄 수 있고 
      template과 html을 함께 사용할 수 있다.
      <template v-for="user in user" :key="user.id">
        <div v-if="user.isActive">{{ user.name }}</div>
      </template>
     -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(true);
    const ok = ref(true);

    // v-if는 실제로 렌더링이 된다. 내부의 컴포넌트들이 제거되고 다시 생성된다. (전환비용이 높다. 돔을 제거,생성)
    // v-show 초기 렌더링 할 때 일단 element를 생성한다. 이후 v-show조건 여부에 따라 display값을 결정한다. (초기 렌더링비용이 높다.)
    // 만약 자주 전환해야하는 경우라면 v-show를 사용하는 편이 좋다. 런타임 시 조건이 변경되지 않는다면 v-if를 사용하는 것이 좋다.

    return { visible, ok };
  },
};
</script>

<style lang="scss" scoped>
.isActive {
  font-size: 20px;
}
.text-danger {
  color: red;
}
.text-blue {
  color: blue;
}
</style>

<!-- computed는 기본적으로 getter , 읽기전용이다. computed값에 새 값을 할당 하려고 하면 runtime경고가 표시된다. -->
