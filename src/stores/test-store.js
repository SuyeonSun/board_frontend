import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useTestStore = defineStore("testStore", {
  state: () => ({}),

  actions: {
    async hello() {
      try {
        const response = await api.get("/api/hello");
      } catch (error) {
        console.log("error");
      }
    },

    async name() {
      try {
        const name = "suyeon";
        const response = await api.get(`/api/${name}`);
      } catch (error) {
        console.log("error");
      }
    },

    async age() {
      try {
        const response = await api.get(`/api?age=${10}`);
      } catch (error) {
        console.log("error");
      }
    },

    async userInfo() {
      try {
        const response = await api.post(`/api/userInfo`, {
          phoneNumber: "010-1234-5678",
          address: "Hollywood",
        });
      } catch (error) {
        console.log("error");
      }
    },
  },
});
