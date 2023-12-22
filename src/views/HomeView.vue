<template>
  <AppHero fullHeight :data="homepageData" />
  <SectionContainer v-if="posts">
    <PostsList title="News" path="/posts/news" :posts="posts" />
  </SectionContainer>
  <SectionContainer>
    <PostsList title="News" path="/posts/tutorials" :posts="tutorials" />
  </SectionContainer>
  <SectionContainer>
    <PostsList title="News" path="/posts/tutorials" :posts="articles" />
  </SectionContainer>
</template>

<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import { homepageData } from "@/constants";
import { usePosts, useTutorials } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import PostsList from "@/components/PostsList.vue";
import SectionContainer from "@/components/SectionContainer.vue";
import { onMounted, ref } from "vue";

let posts = ref();
const tutorials: Post[] = usePosts({ limit: 4 });
const articles: Post[] = useTutorials({ limit: 6 });

onMounted(async () => {
  const { handler } = await import("../api/route");

  const news = await handler("everything?q=Apple&pageSize=10");
  posts.value = news;
});
</script>
