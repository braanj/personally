<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main class="mt-[72px] w-full bg-gray-200">
    <RouterView />
  </main>
</template>
