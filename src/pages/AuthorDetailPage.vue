<template>
   <div>
    <p v-if="loading">Loading author...</p>
    <p v-if="error">{{ authorStore.error.message }}</p>
    <h1 v-if="author">{{author.name}}</h1>
    <p>{{getPostsPerAuthor(authorId).length}} posts written.</p>
    <p v-for="post in getPostsPerAuthor(authorId)" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </p>
  </div>
    
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useAuthorStore } from '../state/author'
import { usePostStore } from '../state/posts'
import { storeToRefs } from 'pinia'

const { author, loading, error} = storeToRefs(useAuthorStore())
const { getPostsPerAuthor } = storeToRefs(usePostStore())
const { fetchAuthorById } = useAuthorStore()
const { fetchPosts } = usePostStore()

const router = useRoute()
fetchPosts()

const authorId = router.params.id

fetchAuthorById(authorId)

</script>

<style>

</style>