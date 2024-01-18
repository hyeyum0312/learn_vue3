<template>
  <div class="card">
    <div class="card-header">Deep child Component</div>
    <div class="card-body">
      <p>{{ staticMessage }}</p>
      <p>{{ count }}</p>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  components: {},
  setup() {
    const staticMessage = inject('stetic-message', 'default-message');
    const count = inject('count');
    const { message, updateMessage } = inject('message');
    updateMessage('!');
    message.value = message.value + '!';
    return { staticMessage, count, message };
  },
};
</script>

<style lang="scss"></style>
