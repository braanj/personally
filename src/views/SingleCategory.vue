<template>
  <SectionContainer>
    <PostsList title="News" path="/posts/news" :posts="posts" />
  </SectionContainer>
</template>

<script setup lang="ts">
import { usePosts } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import PostsList from "@/components/PostsList.vue";
import SectionContainer from "@/components/SectionContainer.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const category = route.query.category as string;

/**
 * Filters posts with category when passed
 * Or returns the posts array
 *
 * @returns {array} - posts
 */
const posts: Post[] = category
  ? usePosts().filter((post) => {
      const postCategories = post.category.toString().toLowerCase().split(",");

      if (post && Array.isArray(post.category)) {
        return postCategories.includes(category);
      } else {
        return post.category === category;
      }
    })
  : usePosts();
</script>
