<template>
  <main class="container py-4">
    <label>
      {{ label }}
      <input
        v-model="username"
        type="text"
        @input="event => $emit('update: modelValue', event.target.value)"
      />
    </label>
  </main>
</template>

<script>
import {} from 'vue';

export default {
  props: ['modelValue', 'label'],
  emits: ['update: modelValue'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
