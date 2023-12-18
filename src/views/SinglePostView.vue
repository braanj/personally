<template>
  <div v-if="post">
    <div class="container text-center md:py-20 py-10">
      <h1 class="text-gradiant text-center">{{ post.title }}</h1>
      <small class="block mt-10 font-bold text-gray-400">{{
        post.published_at
      }}</small>
    </div>
    <div
      class="xl:max-w-[80%] mx-auto w-full xxl:min-h-[600px] md:min-h-[500px] min-h-[200px] bg-cover bg-center md:rounded rounded-ee-md rounded-es-md"
      :style="`background-image: url(${post.image})`"
    ></div>
    <div class="post-content container py-10" v-html="markdownRendered"></div>
  </div>
</template>

<script setup lang="ts">
import { usePosts } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import { useRoute } from "vue-router";
import { computed } from "vue";
// @ts-ignore
import showdown from "showdown";

const route = useRoute();
const post = usePosts().find((post: Post) => route.path === post.path);

const markdownRendered = computed(() => {
  const converter = new showdown.Converter();
  return converter.makeHtml(post?.content);
});
</script>

<style scoped>
.post-content img {
  width: 100%;
  height: auto;
  border-radius: 20px !important;
}
</style>
