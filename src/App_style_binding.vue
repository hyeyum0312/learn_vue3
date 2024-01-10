<template>
  <div>
    <div :style="styleObject">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </div>

    <button @click="fontSize++">+</button>
    <button @click="fontSize--">-</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    // 인라인 스타일을 넣을 땐 카멜케이스로 넣는다.
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px',
    // });

    const fontSize = ref(13);
    const styleObject = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px',
      };
    });

    return { styleObject, fontSize };
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
