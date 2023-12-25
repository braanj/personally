<template>
  <SectionContainer>
    <template v-for="post in displayedItems">
      <Transition name="slide-fade">
        <PostItem v-if="post" :post="post" :key="post.title" />
      </Transition>
    </template>

    <div v-if="showPagination" class="flex gap-4 justify-between items-center">
      <div>
        <p>
          Showing <strong>{{ startIndex }} </strong> to
          <strong>{{ endIndex }}</strong> of <strong>{{ items.length }}</strong>
        </p>
      </div>
      <div class="flex gap-2 mt-4">
        <button
          class="px-2 bg-white rounded-md"
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          Prev
        </button>
        <button
          class="px-2 bg-white rounded-md"
          v-for="page in pages"
          :key="`page-${page}`"
          @click="changePage(page)"
          :disabled="currentPage === page"
        >
          {{ page }}
        </button>
        <button
          class="px-2 bg-white rounded-md"
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === pageCount"
        >
          Next
        </button>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import type { Post } from "@/types/Post";
import PostItem from "@/components/PostItem.vue";
import SectionContainer from "@/components/SectionContainer.vue";
import { computed, ref, type PropType } from "vue";

const { items, itemsPerPage } = defineProps({
  items: {
    type: Array as PropType<Post[]>,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
});

const currentPage = ref(1);

const showPagination = computed(() => itemsPerPage < items.length);

/**
 * Rounds up and returns the smallest integer greater than or equal to page count.
 * @returns {number} pageCount
 */
const pageCount = computed(() => {
  return Math.ceil(items.length / itemsPerPage);
});

/**
 * Creates the pages array based on the pageCount
 * @returns {Array} pages
 */
const pages = computed(() => {
  return Array.from({ length: pageCount.value }, (_, i) => i + 1);
});

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => currentPage.value * itemsPerPage);

/**
 * Slices the items to show from the items array based on the currentPage
 * @returns {Post[]} displayedItems
 */
const displayedItems = computed((): Post[] => {
  return items.slice(startIndex.value, endIndex.value);
});

/**
 * Changes the currentPage to the index provided
 * @param pageIndex
 */
const changePage = (pageIndex: number) => {
  currentPage.value = pageIndex;
};
</script>

<style scoped>
:disabled {
  @apply opacity-50;
}
</style>
