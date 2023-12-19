<template>
  <AppHero v-if="data" :data="data" />
  <RouterView class="min-h-[55vh]" :key="$route.fullPath" />
</template>

<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import { newsCategoryHero } from "@/constants";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const category = route.query.category as string;
let data!: { [x: string]: any };

if (category) {
  data = {
    title: `${category}`,
  };
} else {
  data = newsCategoryHero;
}
</script>
