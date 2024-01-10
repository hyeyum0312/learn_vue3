<template>
  <div class="modifier">
    <div class="clickDiv" @click="clickDiv">
      DIV영역
      <!-- 클릭 요소가 나 자신일 때 실행한다. -->
      <p class="clickSpan" @click.self="clickSpan">
        P영역
        <span class="clickP" @click.stop="clickP">SPAN영역</span>
      </p>
    </div>
  </div>
</template>

<script>
import {} from 'vue';

export default {
  setup() {
    // 이벤트 버블링 현상 발생!
    const clickDiv = () => {
      console.log('clickDiv');
    };
    const clickSpan = () => {
      console.log('clickSpan');
    };
    const clickP = () => {
      console.log('clickP');
      alert('좋아요');
    };

    return { clickDiv, clickSpan, clickP };
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
