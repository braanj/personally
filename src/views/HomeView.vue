<template>
  <AppHero :data="homepageData.hero" />
  <SectionContainer>
    <PostsList title="News" path="/news" :posts="posts" />
  </SectionContainer>
  <SectionContainer>
    <PostsList title="News" path="/tutorials" :posts="tutorials" />
  </SectionContainer>
  <SectionContainer>
    <PostsList title="News" path="/tutorials" :posts="articles" />
  </SectionContainer>
</template>

<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import { homepageData } from "@/constants";
import { usePosts, useTutorials } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import PostsList from "@/components/PostsList.vue";
import SectionContainer from "@/components/SectionContainer.vue";

const posts: Post[] = usePosts({ limit: 2 });
const tutorials: Post[] = useTutorials({ limit: 4 });
const articles: Post[] = useTutorials({ limit: 6 });
</script>
