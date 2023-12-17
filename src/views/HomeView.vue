<template>
  <AppHero :data="homepageData.hero" />
  <SectionContainer>
    <PostsList title="News" path="/news" :posts="data" />
  </SectionContainer>
  <SectionContainer>
    <PostsList title="News" path="/tutorials" :posts="data" />
  </SectionContainer>
</template>

<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import { homepageData } from "@/constants";
import { usePosts } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import PostsList from "@/components/PostsList.vue";
import SectionContainer from "@/components/SectionContainer.vue";

let data: Post[] = usePosts().slice(0, 3);
</script>
