<template>
  <div>
    <div class="card">
      <div class="card-body">
        <span class="badge bg-secondary">{{ typeName }}</span>
        <h5 class="card-title mt-2" :class="$style.red">{{ title }}</h5>
        <p class="card-text">
          {{ contents }}
        </p>

        <a href="#" class="btn" :class="isLikeClass">좋아요</a>
        <!-- <a v-if="isLike === true" href="#" class="btn btn-danger">좋아요</a>
        <a v-else href="#" class="btn btn-outline-danger">좋아요</a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
console.log('AppCard');
export default {
  // props: ['title', 'contents'],
  props: {
    type: {
      type: String,
      default: 'news',
      validator: value => {
        return ['news', '공지사항'].includes(value);
      },
    },
    title: { type: String, required: true },
    contents: { type: String, required: true },
    isLike: { type: Boolean, required: false },
  },

  emits: ['toggleLike'],
  // porps를 첫번째 매개변수로 담아서 사용이가능하다.
  setup(props, context) {
    console.log('props.title', props.title);
    // 컴포넌트는 사용할 때 마다 해당 컴포넌트의 새 인스턴스가 생성된다. 사용 시 마다 setup함수가 실행됨
    console.log('AppCard - setup'); // 6번찍힐 것임
    const color = ref('black');

    // eslint-disable-next-line vue/return-in-computed-property
    const isLikeClass = computed(() =>
      props.isLike === true ? 'btn-danger' : 'btn-outline-danger',
    );

    const typeName = computed(() =>
      props.type === 'news' ? '뉴스' : '공지사항',
    );

    const toggleLike = () => {
      context.emit('toggleLike');
    };

    return { color, isLikeClass, typeName, toggleLike };
  },
};

// 자식컴포넌트에서 props를 변경하고 싶다면 부모컴포넌트로 이벤트를 올려줌으로써 변경가능하다.
// emit
</script>

<!-- scoped를 사용하면 , 이 파일에 작성한 css 스타일은 외부에서 사용 불가하다. -->
<!-- <style lang="scss" scoped>.red { color: red;}</style> -->
<!-- module을 붙이면 style의 내장객체의 속성으로 포함되어서 사용할 수 있다.  -->
<!-- <style lang="scss" module="classes"> 모듈 이름도 변경 가능함  -->
<style lang="scss" module>
.red {
  // color: red;
  color: v-bind(color);
}
</style>
