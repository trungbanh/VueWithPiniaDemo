import { defineStore } from 'pinia';
import connecter from '../api/connecter';
import { usePostStore } from './posts';

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    author: null,
    authors: [],
    loading: false,
    error: false
  }),
  getters: {
    getPostAuthor: (state) => {
      const posts = usePostStore();
      return state.authors.find((author) => (author.id === posts.post.userId))
    }
  },
  actions: {
    async fetchAuthors() {
      this.authors = []
      this.loading = true
      try {
        this.authors = await connecter.get('users')
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchAuthorById(authorId) {
      console.log("fetchAuthorById ", authorId);
      this.author = null
      this.loading = true
      try {
        this.author = await connecter.get(`users/${authorId}`)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})