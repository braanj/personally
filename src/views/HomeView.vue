<template>
  <AppHero :data="homepageData.hero" />
  <div class="container">
    <h1>Home page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta
      eveniet iste necessitatibus fugit commodi laboriosam magnam quos optio
      maxime in natus vero cum excepturi sed obcaecati itaque consequuntur.
      Molestiae!
    </p>
  </div>
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
