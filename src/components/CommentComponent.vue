<script setup>
  import {defineProps} from "vue"

  defineProps(['comments'])
</script>

<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <h5>{{ comment.name }}</h5>
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>
