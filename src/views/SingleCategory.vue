<template>
  <Pagination :items="posts" :items-per-page="5" />
</template>

<script setup lang="ts">
import { usePosts } from "@/composable/useApi";
import type { Post } from "@/types/Post";
import { useRoute } from "vue-router";
import Pagination from "@/components/Pagination.vue";
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
