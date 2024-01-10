<template>
  <div>
    <h2>속성 바인딩</h2>
    <img class="img" :src="imageSrc" />

    <div :title="dynamicTitle">마우스를 올려보세요</div>

    <div :class="{ red: isRed }"></div>

    <input type="text" value="조혜연" :disabled="isInputDisabled" />
    <input v-bind="attrs" />
  </div>
</template>

<script>
import { ref } from 'vue';
// v-bind:title -> :title
// v-bind:disabled -> :disabled

export default {
  setup() {
    const dynamicTitle = ref('Hello');
    const isRed = true;
    const isInputDisabled = ref(true);
    const imageSrc = ref(
      'https://images.unsplash.com/photo-1700493624971-ec17b4128f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMzYwMDU1NA&ixlib=rb-4.0.3&q=80&w=1080',
    );

    // 다중속성 바인딩도 가능함.
    const attrs = ref({
      type: 'text',
      value: '12345678',
      disabled: true,
    });

    return { dynamicTitle, isInputDisabled, attrs, imageSrc, isRed };
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 300px;
  height: 300px;
}

.red {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>
