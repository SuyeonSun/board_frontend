import { defineStore } from 'pinia';
import { api } from "boot/axios";

export const usePostStore = defineStore('postStore', {
  state: () => ({

  }),

  actions: {
    async post(payload) {
      try {
        const response = api.post("/post", {
          userName: "가나다",
          title: payload.title,
          content: payload.content
        })
        console.log(response);
      } catch (error) {
        console.log("error");
      }
      console.log(payload);
    }
  }
})
