<template>
  <SectionContainer>
    <div class="about">
      <h1>This is an about page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        quasi omnis iure perferendis nulla libero sunt quo unde neque,
        consequatur, rerum impedit? Nobis, iste facilis est illum debitis velit
        laboriosam!
      </p>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const SectionContainer = defineAsyncComponent(
  () => import("@/components/SectionContainer.vue")
);
</script>
