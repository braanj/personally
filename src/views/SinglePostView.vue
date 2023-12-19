<template>
  <div v-if="post">
    <div class="container text-center md:py-20 py-10">
      <h1 class="text-gradiant text-center">{{ post.title }}</h1>
      <small class="block mt-10 font-bold text-gray-400">{{
        post.published_at
      }}</small>
      <div class="flex gap-4 justify-center mt-6">
        <RouterLink
          class="px-3 py-1 no-underline bg-slate-300 rounded"
          v-for="c in post.category"
          :to="`/posts/news?category=${c.toLowerCase()}`"
          >{{ c }}</RouterLink
        >
      </div>
    </div>
    <div
      class="xl:max-w-[80%] mx-auto w-full xxl:min-h-[600px] md:min-h-[500px] min-h-[200px] bg-cover bg-center md:rounded rounded-ee-md rounded-es-md"
      :style="`background-image: url(${post.image})`"
    ></div>
    <div class="post-content container py-10" v-html="markdownRendered"></div>
  </div>
  <SectionContainer class="py-20">
    <PostsList title="Recommended articles" :posts="recommended" />
  </SectionContainer>
</template>

<script setup lang="ts">
import { usePosts } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import { useRoute } from "vue-router";
import { computed } from "vue";
// @ts-ignore
import showdown from "showdown";
import PostsList from "@/components/PostsList.vue";
import SectionContainer from "@/components/SectionContainer.vue";

const route = useRoute();

const post = usePosts().find((post: Post) => route.path === post.path);
const recommended = usePosts()
  .filter((item: Post) => {
    if (item.slug === post?.slug) return false;

    if (post && Array.isArray(post.category)) {
      if (Array.isArray(item.category)) {
        return item.category.find((c) => post.category.includes(c));
      } else {
        return post.category.includes(item.category);
      }
    } else {
      if (Array.isArray(item.category)) {
        return item.category.includes(post?.category as string);
      } else {
        return post?.category === item.category;
      }
    }
  })
  .slice(0, 3);

const markdownRendered = computed(() => {
  const converter = new showdown.Converter();
  return converter.makeHtml(post?.content);
});
</script>
