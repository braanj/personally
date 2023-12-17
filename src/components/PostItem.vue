<template>
  <RouterLink
    v-if="post"
    :to="post.slug"
    class="flex justify-between gap-6 px-6 py-4 items-center bg-white rounded-lg no-underline"
  >
    <div class="w-auto">
      <small>{{ post.published_at }}</small>
      <h2 class="m-0">{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <p><strong>Author:</strong> {{ post.author }}</p>
    </div>
    <div
      class="max-w-[30%] h-full w-full min-h-[200px] bg-cover bg-center rounded"
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
