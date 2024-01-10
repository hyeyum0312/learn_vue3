<template><div></div></template>

<script>
import { reactive, readonly } from 'vue';

export default {
  setup() {
    const original = reactive({ count: 0 });
    const copy = readonly(original);
    original.count++;
    // copy.count++; // 타겟은 readonly이기때문에 ++불가함

    console.log('original', original.count);
    console.log('copy', copy.count);
  },
};
</script>

<style lang="scss" scoped></style>
