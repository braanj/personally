<template>
  <AppHero fullHeight :data="homepageData" />
  <SectionContainer>
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
import { homepageData } from "@/constants";
import { usePosts, useTutorials } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import { defineAsyncComponent } from "vue";

const AppHero = defineAsyncComponent(() => import("@/components/AppHero.vue"));

const SectionContainer = defineAsyncComponent(
  () => import("@/components/SectionContainer.vue")
);

const PostsList = defineAsyncComponent(
  () => import("@/components/PostsList.vue")
);

const posts: Post[] = usePosts({ limit: 10 });
const tutorials: Post[] = useTutorials({ limit: 4 });
const articles: Post[] = useTutorials({ limit: 6 });
</script>
