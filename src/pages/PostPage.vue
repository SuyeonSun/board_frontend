<script setup>
import { ref } from "vue";
import { usePostStore } from "stores/post-store";

const postStore = usePostStore();

const title = ref(undefined);
const content = ref(undefined);

const clickBtn = () => {
  const postPayload = {
    title: title.value,
    content: content.value
  }
  postStore.post(postPayload);
}
</script>

<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input outlined v-model="title" dense/>
    <q-input
      v-model="content"
      outlined
      type="textarea"
      dense
    />
    <q-btn square flat icon="send" @click="clickBtn"/>
  </div>
</template>
