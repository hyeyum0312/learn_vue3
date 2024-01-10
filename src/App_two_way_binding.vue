<template>
  <div>
    <h2>input value</h2>
    <input type="text" v-model="inputValue" />

    <!-- .lazy : 기본적으로 v-model은 각 Input이벤트 후 입력과 데이터를 동기화 한다. lazy수식어를 추가하여 change이벤트 이후에 동기화 할 수 있다. -->
    <!-- <input type="text" v-model.lazy="inputValue" /> -->

    <!-- .number : 사용자 입력이 자동으로 number타입으로 형변환 되기를 원하면 .number 수식어를 추가하면 된다. value로 사칙연산을 수행한다면 유용할 수 있다.  -->
    <!-- <input type="text" v-model.number="inputValue" /> -->

    <!-- .trim : 사용자가 입력한 내용에서 자동으로 앞 뒤 공백을 제거하는 트림처리가 되길 바란다면 사용하면 된다. -->
    <!-- <input type="text" v-model.trim="inputValue" /> -->
    {{ inputValue }}

    <h2>textarea value</h2>
    <textarea v-model="textareaValue"></textarea>
    {{ textareaValue }}

    <h2>select value</h2>
    <select v-model="selectValue">
      <option value="필라테스">필라테스</option>
      <option value="골프">골프</option>
      <option value="헬스">헬스</option>
    </select>
    {{ selectValue }}

    <h2>checkbox value</h2>
    {{ checkboxValue }}
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="Yes"
      false-value="No"
    />
    <!-- 결과 값에 따라 다르게 보여줘야 하는 경우  true-value,false-value를 사용한다.  -->

    <h2>checkbox values</h2>
    <label>
      <input type="checkbox" value="html" v-model="checkboxValues" />
      html
    </label>
    <label>
      <input type="checkbox" value="CSS" v-model="checkboxValues" />
      CSS
    </label>
    <label>
      <input type="checkbox" value="JS" v-model="checkboxValues" />
      JS
    </label>
    {{ checkboxValues }}

    <h2>radio value</h2>
    <label>
      <input type="radio" value="O" v-model="radioValue" />
      O형
    </label>
    <label>
      <input type="radio" value="A" v-model="radioValue" />
      A형
    </label>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  components: {},
  setup() {
    const inputValue = ref('');
    const textareaValue = ref('');
    const selectValue = ref('필라테스');
    const checkboxValue = ref(true);
    const radioValue = ref('O');
    const checkboxValues = ref([]);

    return {
      inputValue,
      textareaValue,
      selectValue,
      checkboxValue,
      radioValue,
      checkboxValues,
    };
  },
};
</script>

<style lang="scss"></style>
