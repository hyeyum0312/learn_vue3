<template>
  <div class="container py-4">
    <input ref="input" type="text" />
    <p>{{ input }}</p>
    <p v-if="input">
      {{ input.value }}, {{ $refs.input.value }},
      {{ $refs.input === input }}
      <!-- 동일객체인지 확인 , true가 찍힐것이다. -->
    </p>
    <!-- 
        오류발생한다 , 왜냐하면 input은 mount가 발생하기 전까지는 null이다. 
        그리고 mount가 완료된 후에 첨부 값이 할당된다.
     -->

    <hr />
    <!-- <ul>
      <li v-for="item in fruits" :key="item" ref="itemRefs">{{ item }}</li>
      <li
        v-for="item in fruits"
        :key="item"
        :ref="
          (el) => {
            itemRefs.push(el.textContent)
          }
        "
      >
        {{ item }}
      </li>
    </ul> -->
    <TemplateRefChild ref="child"></TemplateRefChild>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import TemplateRefChild from './TemplateRefChild.vue'
export default {
  components: { TemplateRefChild },
  setup() {
    const input = ref(null)
    onMounted(() => {
      input.value.value = 'Hello world'
      console.log('onMounted', input.value)
      //   itemRefs.value.forEach((item) => {
      //     console.log(item, item.textContent)
      //   })

      itemRefs.value.forEach((item) => {
        console.log(item)
      })

      console.log('child message', child.value.message)
      child.value.sayHello()
    })
    const fruits = ref(['사과', '딸기', '포도'])
    const itemRefs = ref([])
    const child = ref(null)
    return { input, fruits, itemRefs, child }
  }
}
</script>

<style lang="scss" scoped></style>
