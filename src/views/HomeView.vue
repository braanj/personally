<template>
  <AppHero :data="homepageData.hero" />
</template>

<script setup lang="ts">
import AppHero from "@/components/AppHero.vue";
import { homepageData } from "@/constants";
</script>
