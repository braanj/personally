<template>
  <RouterLink
    v-if="post"
    :to="post.path ? post.path : ''"
    class="md:flex justify-between gap-6 md:px-6 md:py-4 items-center bg-white rounded-lg no-underline"
  >
    <div class="p-6 md:p-0 w-auto">
      <small class="block mb-4 font-bold text-gray-400">{{
        post.published_at
      }}</small>
      <h2 class="m-0">{{ post.title }}</h2>
      <p class="hidden md:block">{{ post.description }}</p>
    </div>
    <div
      class="md:max-w-[30%] h-full w-full min-h-[200px] bg-cover bg-center md:rounded rounded-ee-md rounded-es-md"
      :style="`background-image: url(${post.image})`"
    ></div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Post } from "@/types/Post";
import type { PropType } from "vue";

const { post } = defineProps({
  post: {
    type: Object as PropType<Post>,
  },
});
</script>
