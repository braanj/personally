<template>
  <header class="py-6 shadow-md fixed top-0 w-full bg-white">
    <div class="flex gap-2 justify-between items-center container">
      <RouterLink to="/">
        <AppLogo />
      </RouterLink>

      <nav class="flex gap-4 justify-end">
        <template v-for="item in navigation" :key="item.label">
          <RouterLink
            class="font-bold"
            :class="{
              'text-gray-500': item.path !== $route.fullPath,
              'text-black-500': item.path === $route.fullPath,
            }"
            :to="item.path"
            :title="item.title"
            >{{ item.label }}</RouterLink
          >
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navigation } from "@/constants/index";
import AppLogo from "@/components/svg/AppLogo.vue";
</script>
