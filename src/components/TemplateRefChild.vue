<template>
  <div class="container py-4"></div>
</template>

<script>
import { ref } from 'vue'
export default {
  components: {},
  setup() {
    const message = ref('hello')
    const sayHello = () => {
      console.log('sayHello', message)
      alert(message.value)
    }
    return { message, sayHello }
  }
}
</script>

<style lang="scss" scoped></style>
