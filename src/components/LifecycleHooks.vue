<template>
  <div class="container py-4">
    <button type="button" @click="visible = !visible">toggle child</button>
    <input type="text" ref="inputRef" value="hello" />
    <LifecycleChild v-if="visible"></LifecycleChild>
    <!-- 
      부모 컴포넌트 먼저 실행 , onBeforeMount ,onMounted
      이후 자식 컴포넌트를 실행 후 , 자식컴포넌트 완료 되고 부모컴포넌트가 완료된다.
    -->
    <div id="message">{{ message }}</div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
  components: { LifecycleChild },
  setup() {
    console.log('setup');
    const inputRef = ref(null);
    const message = ref('');
    const visible = ref(false);

    // Mounting: 컴포넌트 삽입 , onBeforeMount, onMounted
    // 초기 렌더링 직전에 DOM을 변경하고자한다면 이 단계에서 실행한다.

    // onBeforeMount(() => {
    //   // 컴포넌트가 마운트 되기 직전에 실행한다. (권장X)
    //   // console.log('onBeforeMount', inputRef.value.value); // null (아직 mount되지 않아서 null이출력된다.)
    // });

    // onMounted(() => {
    //   // 컴포넌트가 마운트된 직후에 사용한다. DOM에 접근이 가능하다.
    //   console.log('onMounted', inputRef.value.value); // hello
    // });

    // // 반응형 상태의 변경으로 인해 , 이런 변경을 DOM에 적용 시켜야 할 때 호출되는 Hook이 onBeforeUpdate, onUpdated
    // onBeforeUpdate(() => {
    //   console.log(
    //     'DOM contents',
    //     document.querySelector('#message').textContent,
    //   );
    // });

    // onUpdated(() => {
    //   console.log(
    //     'DOM contents',
    //     document.querySelector('#message').textContent,
    //   );
    // });

    /** 콘솔 
      LifecycleHooks.vue:34 onMounted hello
      LifecycleHooks.vue:39 DOM contents 
      LifecycleHooks.vue:46 DOM contents hyeyeon
    **/

    return { inputRef, message, visible };
  },

  // 예전에 이런것이 있었다.
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
};
</script>

<style lang="scss" scoped></style>
