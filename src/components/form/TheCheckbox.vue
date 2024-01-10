<template>
  <div>
    <label>
      <input
        type="checkbox"
        class="input"
        :value="setValue"
        :checked="setValue === true"
      />
      <svg viewBox="0 0 64 64" class="icon" fill="none">
        <path
          class="line"
          d="M50.6667 13.3333V50.6667H13.3333V13.3333H50.6667ZM50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8Z"
        ></path>
        <rect class="fill" x="13" y="13" width="38" height="38"></rect>
        <path
          class="path"
          d="M48.5 24.8447L44.7667 21.1113L27.1667 38.7113L20.2333 31.778L16.5 35.5113L27.1667 46.178L48.5 24.8447Z"
          fill="white"
        />
      </svg>
    </label>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['modelValue'],
  emits: ['update: modelValue'],

  setup(props) {
    const setValue = ref(props.modelValue);
    // eslint-disable-next-line no-undef
    console.log('props.modelValue', props.modelValue);

    return { setValue };
  },
};
</script>
<style lang="scss" module></style>
