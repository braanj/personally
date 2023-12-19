<template>
  <div
    class="bg-white py-20 justify-center items-center flex"
    :class="{ 'min-h-[90vh]': fullHeight }"
  >
    <div
      class="prose container flex flex-col items-center text-center justify-center"
    >
      <span v-if="data.badge" class="bg-gray-200 py-2 px-4 mb-2 rounded-full">{{
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
  fullHeight: Boolean,
});
</script>
