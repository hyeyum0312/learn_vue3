<template>
  <div>
    <div :class="classObject">텍스트입니다.</div>
    <div :class="[activeClass, errorClass]">배열로도 사용가능함.</div>
    <div
      :class="[isActive ? 'trueClass' : 'falseClass', errorClass, classObject]"
    >
      삼항연산자로도 사용가능함.
    </div>
    <button @click="toggle">토글</button>
    <button @click="hasError = !hasError">토글에러</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    //만약 바인딩 할 데이터가 만다면 object로 선언해서 사용할 수 있다.
    // const classObject = reactive({
    // active: true,
    // 'text-danger': false,
    // });

    // active되는 상태가 여러개가 필요하다면 computed를 활용해보자
    const classObject = computed(() => {
      return {
        active: true, // 조건이 여러개라면 && 조건도 넣어줄 수 있음
        'text-danger': false,
        'text-blue': true,
      };
    });

    // 만약 :class에 여러개를 넣고싶은 경우 배열로도 사용가능하다.
    const activeClass = ref('active');
    const errorClass = ref('error');

    return { isActive, toggle, hasError, classObject, activeClass, errorClass };
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
