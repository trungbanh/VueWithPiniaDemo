import { defineStore } from "pinia";
import connecter from "../api/connecter";
import { usePostStore } from "./posts";

export const useCommentStore = defineStore({
  id: "comment",
  state: () => ({
    comments: [],
    comment: null,
    loading: false,
    error: null,
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore()
      return state.comments.filter((comment) => {
        return comment.postId === postSore.post.id
      })
    }
  },
  actions: {
    async fetchComments() {
      this.comments = [];
      this.loading = true;
      try {
        this.comments = await connecter.get('comments')
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  }
})