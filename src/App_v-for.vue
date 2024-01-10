<template>
  <div>
    <!-- 조건에 따라 여러개가 변경되어야 하는 경우 template를 사용하면된다, -->
    <template v-for="(item, index) in evenItems" :key="item.id">
      <!-- <li v-if="itme.id % 2 === 0">야채: {{ item.message }}</li> 대신 필터로 조건 처리한 데이터 넣어도된다. -->
      <li>야채: {{ (index, item.message) }}</li>
    </template>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive([
      { id: 1, message: '파프리카' },
      { id: 2, message: '양배추' },
      { id: 3, message: '고구마' },
    ]);

    const evenItems = items.filters(item => item.id % 2 === 0);
    return { items, evenItems };
  },
};
</script>

<style lang="scss" scoped></style>

<!-- computed는 기본적으로 getter , 읽기전용이다. computed값에 새 값을 할당 하려고 하면 runtime경고가 표시된다. -->
