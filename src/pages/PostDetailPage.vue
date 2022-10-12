<template>
  <div>
    <p v-if="loading">Loading post...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="post">
      <post-component :post="post" :author="getPostAuthor"></post-component>
    </p>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthorStore } from '../state/author'
  import { usePostStore } from '../state/posts'
  import PostComponent from '../components/PostComponent.vue'

  const route = useRoute() 
  const { getPostAuthor } = storeToRefs(useAuthorStore())
  const { fetchAuthors} = useAuthorStore()
  const { post, loading, error } = storeToRefs(usePostStore())
  const { fetchPost } = usePostStore()

  fetchAuthors()
  fetchPost(route.params.id)
</script>

<style>

</style>