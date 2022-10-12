<template>
  <main>
    <p v-if="loading">Loading authors...</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-for="author in authors" :key="author.id">
      <router-link :to="`/author/${author.id}`">{{ author.name }}</router-link>
    </div>
  </main>
</template>

<script setup>
import {storeToRefs} from 'pinia';
import { useAuthorStore } from "../state/author";

const { authors, loading, error} = storeToRefs(useAuthorStore())

const { fetchAuthors } = useAuthorStore();

fetchAuthors()

</script>

<style>

</style>