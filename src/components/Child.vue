<template>
  <div class="card">
    <div class="card-header">child Component</div>
    <div class="card-body">
      <DeepChild></DeepChild>
      <p>{{ appMessage }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import DeepChild from './DeepChild.vue';
export default {
  components: { DeepChild },
  setup() {
    const appMessage = inject('app-message');
    return { appMessage };
  },
};
</script>

<style lang="scss"></style>
