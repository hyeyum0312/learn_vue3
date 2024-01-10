<template>
  <div>Hello World!</div>
  <button @click="increment">Counter: {{ counter }}</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increment() {
      this.counter++;
    },
  },
  mounted() {
    console.log('컴포넌트가 마운티드 되었습니다.');
  },
};
</script>

<style></style>
