<template>
  <main class="container py-4">
    <PostCreate @create-post="createPost"></PostCreate>
    <hr class="my-4" />

    <div class="container text-center">
      <div class="row g-3">
        <div class="col col-4">
          <AppCard
            title="조혜연의 Vue공부법"
            contents="방법1: 열심히 한다."
          ></AppCard>
        </div>
        <div class="col col-4">
          <AppCard :title="post.title" :contents="post.contents"></AppCard>
        </div>
        <div class="col col-4" v-for="post in posts" :key="post">
          <AppCard
            :title="post.title"
            :contents="post.contents"
            :type="post.type"
            :isLike="post.isLike"
            @toggleLike="post.isLike = !post.isLike"
          ></AppCard>
        </div>
      </div>
    </div>

    <hr class="my-4" />
    <label>
      이름
      <input v-model="username" type="text" />
    </label>
    <LabelInput
      :model-value="username"
      @update:modelValue="value => (username = value)"
      label="이름"
    ></LabelInput>
  </main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LableInput.vue';
export default {
  components: {
    AppCard,
    PostCreate,
    LabelInput,
  },
  setup() {
    const post = reactive({
      title: '조혜연의 Vue공부법',
      contents: '방법1: 꾸준히 한다',
    });

    const posts = reactive([
      {
        title: '조혜연의 Vue공부법',
        contents: '방법1: 꾸준히 한다',
        type: 'news',
        isLike: true,
      },
      {
        title: '조혜연의 Vue공부법',
        contents: '방법2: 꾸준히 한다',
        type: 'news',
        isLike: true,
      },
      {
        title: '조혜연의 Vue공부법',
        contents: '방법3: 꾸준히 한다',
        type: '공지사항',
        isLike: true,
      },
      {
        title: '조혜연의 Vue공부법',
        contents: '방법3: 꾸준히 한다',
        type: '공지사항',
        isLike: true,
      },
    ]);

    const createPost = newPost => {
      console.log('createPost', newPost);
      posts.push(newPost);
      console.log('posts', posts);
    };

    const username = ref('');

    return { post, posts, createPost, username };
  },

  // 컴포넌트는 사용할 때 마다 해당 컴포넌트의 새 인스턴스가 생성된다. 사용 시 마다 setup함수가 실행됨
  // 파스칼케이스, 카멜케이스 모두 네이밍 가능하지만
  // 파스칼케이스는 자바스크립트에서도 유용하고 HTML기본 엘리먼트와 쉽게 비교가능하므로 vue공홈에선 파스칼케이스를 사용중임 .
  // 하나의 활성인스턴스를 가진 컴포넌트는 (ex: layout) The접두사로 시작해야함 (but 회사내규에 따르기)
};
</script>

<style lang="scss" scoped></style>
