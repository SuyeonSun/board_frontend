<script setup>
import { useTestStore } from "stores/test-store";

const testStore = useTestStore();

const hello = () => {
  testStore.hello();
};

const name = () => {
  testStore.name();
};

const age = () => {
  testStore.age();
};

const userInfo = () => {
  testStore.userInfo();
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-btn @click="hello" label="hello"></q-btn>
    <q-btn @click="name" label="name"></q-btn>
    <q-btn @click="age" label="age"></q-btn>
    <q-btn @click="userInfo" label="userInfo"></q-btn>
  </q-page>
</template>
