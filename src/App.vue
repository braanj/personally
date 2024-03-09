<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import SectionContainer from "@/components/SectionContainer.vue";
</script>

<template>
  <AppHeader />
  <main class="mt-[72px] w-full prose max-w-none">
    <RouterView :key="$route.fullPath" />
  </main>
  <div class="sticky bottom-0">
    <hr />
    <SectionContainer class="py-3">
      <small class="text-center text-black"
        >&copy; A collaborative work -
        <a
          class="text-blue-600 visited:text-purple-600"
          href="https://github.com/braanj/personally"
          >Github</a
        ></small
      >
    </SectionContainer>
  </div>
</template>
