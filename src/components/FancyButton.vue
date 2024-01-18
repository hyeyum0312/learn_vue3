<template>
  <button class="fancyBrn"><slot>default slot</slot></button>
</template>

<script>
import {} from 'vue';
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fancyBrn {
  width: 100px;
  height: 40px;
  background-color: lightblue;
  color: white;
}
</style>
