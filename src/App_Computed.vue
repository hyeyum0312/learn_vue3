<template>
  <div>
    <h2>{{ dieter.name }}</h2>
    <h3>다이어트중입니까?</h3>
    <p>{{ hasFood }}</p>
    <p>{{ hasFood2() }}</p>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
  setup() {
    const dieter = reactive({
      name: '조혜연',
      food: ['tomato', 'mushroom', 'egg', 'chicken breast'],
    });

    const hasFood = computed(
      //하나의 경우 return과 {}생략 가능함.
      () => (dieter.food.length > 0 ? '있음 ⛹️‍♂️' : '없음 ⛹️‍♂️'),
    );

    // 메서드 실행 시 결과는 같을 수 있다. 그러나 성능면에서는 computed가 더좋음 내부에서 계산된 값이 캐시되기 때문
    const hasFood2 = () => (dieter.food.length > 0 ? '있음 ⛹️‍♂️' : '없음 ⛹️‍♂️');

    // computed는 기본적으로 getter , 읽기전용이다. computed값에 새 값을 할당 하려고 하면 runtime경고가 표시된다.
    // 만약 값을 재할당 해주어야한다면 get, set을 사용해서 속성을 만들 수 있다.
    const firstName = ref('조');
    const lastName = ref('혜연');
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },

      // setter함수를 통해 쓰기 가능한 속성으로도 만들 수 있음.
      set(newData) {
        //구조분해할당 (기존 값에 할당 )
        [firstName.value, lastName.value] = newData.split('');
      },
    });
    fullName.value = '안녕 하세요';
    console.log('fullName.value', fullName.value);

    return { dieter, hasFood, hasFood2, firstName, lastName, fullName };
  },
};
</script>

<style lang="scss" scoped></style>

<!-- computed는 기본적으로 getter , 읽기전용이다. computed값에 새 값을 할당 하려고 하면 runtime경고가 표시된다. -->
