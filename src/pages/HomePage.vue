<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-for="post in posts" :key="post.id">
      <div>{{ post.body }}</div>
      <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
    </div>
  </main>
</template>

<script setup>
import {usePostStore} from '../state/posts';
import { storeToRefs } from 'pinia';

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore();

fetchPosts()
</script>

<style lang="scss">
</style>
