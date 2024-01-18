<template>
  <TheNav></TheNav>
  <!-- <TheView></TheView> -->
  <TheViewCopy></TheViewCopy>
</template>

<script>
import {} from 'vue';
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';
import TheViewCopy from './components/TheView copy.vue';

export default {
  components: { TheNav, TheView, TheViewCopy },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
