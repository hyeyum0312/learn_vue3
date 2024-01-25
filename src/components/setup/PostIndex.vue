<template>
  <main class="container py-4">
    <PostCreate @create-post="createPost"></PostCreate>
    <hr class="my-4" />

    <div class="container text-center">
      <div class="row g-3">
        <div class="col col-4">
          <AppCard title="조혜연의 Vue공부법" contents="방법1: 열심히 한다.">
          </AppCard>
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

<script setup>
import { reactive, ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LableInput.vue';
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
</script>

<style lang="scss" scoped></style>
