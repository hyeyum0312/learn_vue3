<template>
  <div class="card-body">Lifecycle Child</div>
  <input id="input" type="text" />
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
export default {
  components: {},
  setup() {
    console.log('[child] setup');
    onBeforeMount(() => {
      console.log('[child] onBeforeMount');
    });
    onMounted(() => {
      console.log('[child] onMounted');
    });

    onBeforeUnmount(() => {
      console.log('[child] onBeforeUnmount');
      console.log('[child] onBeforeUnmount', document.querySelector('#input'));
    });

    onUnmounted(() => {
      console.log('[child] onUnmounted');
      console.log('[child] onUnmounted', document.querySelector('#input'));
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
