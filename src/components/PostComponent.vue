<script setup>
  import {defineProps} from "vue"
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCommentStore } from '../state/comments'
  import CommentComponent from '../components/CommentComponent.vue'
import PostModel from '../models/Post';

defineProps({
  post: {
    type: PostModel
  },
  author: {
    type: Object
  }
})

  const { getPostComments } = storeToRefs(useCommentStore())
  const { fetchComments } = useCommentStore()

  fetchComments()
</script>

<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author">Written by: <RouterLink :to="`/author/${author.id}`">{{ author.name }}</RouterLink>
        | <span>Comments: {{ getPostComments.length }}</span>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr>
    <h3>Comments:</h3>
    <comment-component :comments="getPostComments"></comment-component>
  </div>
</template>