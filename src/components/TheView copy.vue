<template>
  <main>
    <TemplateRef></TemplateRef>
    <ScriptSetup></ScriptSetup>
  </main>
</template>

<script>
import {} from 'vue';
// import LifecycleHooks from '@/components/LifecycleHooks.vue';
import ScriptSetup from './ScriptSetup.vue';
import TemplateRef from './TemplateRef.vue';
export default {
  components: { TemplateRef, ScriptSetup },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
