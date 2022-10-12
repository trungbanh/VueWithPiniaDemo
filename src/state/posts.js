import { defineStore } from 'pinia';
import connecter from '../api/connecter'
import PostModel from '../models/Post';


export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [PostModel],
    post: PostModel,
    loading: false,
    error: null,
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => {
        return state.posts.filter((post) => post.userId == authorId)
      }
    }
  },
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await connecter.get('posts')
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        this.post = await connecter.get(`posts/${id}`)
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})