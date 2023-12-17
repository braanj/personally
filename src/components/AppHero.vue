<template>
  <div class="bg-white py-20 min-h-[90vh] justify-center items-center flex">
    <div
      class="prose container flex flex-col items-center text-center justify-center"
    >
      <span class="bg-gray-200 py-2 px-4 mb-2 rounded-full">{{
        data.badge
      }}</span>
      <GradiantTitle :text="data.title" />
      <p class="md:text-xl lg:text-2xl text-xl md:max-w-[60%]">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import GradiantTitle from "./GradiantTitle.vue";

const { data } = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
