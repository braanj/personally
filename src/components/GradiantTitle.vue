<template>
  <h1 class="text-gradiant">{{ props.text }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
