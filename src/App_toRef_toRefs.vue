<template>
  <p>author: {{ author }}</p>
  <p>title: {{ title }}</p>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
  setup() {
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 이 책을 지금 바로 읽습니다 ;)',
      price: '무료',
    });

    let { title, author } = book; // 구조분해할당.
    console.log('title', title); // 재할당 된 스트링 (반응성을 잃음)
    console.log('author', author); // 재할당 된 스트링 (반응성을 잃음)

    // 반응형 객체에서 속성을 가져오고싶을 때 반응형을 잃지 않고 가져오고싶다면 , toRefs와 toRef를 사용할 수 있다.
    // 반응성을 잃지 않는 방법
    let { year, description } = toRefs(book); // 구조분해할당.
    console.log('year', year); // 반응성 상태 동기화
    console.log('description', description); // 반응성 상태 동기화

    // 만약 객체 하나만 사용 시
    let { price } = toRef(book);
    console.log('price', price);
  },
};
</script>

<style lang="scss" scoped></style>
