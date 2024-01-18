<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">Provide Indecj Component</div>
      <div class="card-body">
        <button @click="count++">클릭!</button>
        <p>{{ appMessage }}</p>
        <Child></Child>
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref, readonly, inject } from 'vue';
import Child from './Child.vue';
export default {
  components: { Child },
  setup() {
    const staticMessage = 'static message';
    const message = ref('message');
    const count = ref(10);

    const updateMessage = appendMessgae => {
      message.value = message.value + appendMessgae;
    };

    provide('static-message', staticMessage);
    provide('message', { message: readonly(message), updateMessage });
    provide('count', count);
    provide('count', readonly(count));

    const appMessage = inject('app-message');

    return { message, count, updateMessage, appMessage };
  },
  mounted() {
    console.log('this', this.msg);
  },
};
</script>

<style lang="scss" scoped></style>
