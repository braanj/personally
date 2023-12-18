<template>
  <div class="flex justify-between mb-4">
    <h2 class="h2-bold">{{ title }}</h2>
    <RouterLink
      class="m-0 no-underline px-3 py-1 bg-white rounded-md"
      :to="path"
      >View all</RouterLink
    >
  </div>
  <PostItem v-for="post in posts" :key="post.title" :post="post" />
</template>

<script setup lang="ts">
import type { Post } from "@/types/Post";
import type { PropType } from "vue";
import PostItem from "@/components/PostItem.vue";

const { posts } = defineProps({
  posts: {
    type: Array as PropType<Post[]>,
  },
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>
