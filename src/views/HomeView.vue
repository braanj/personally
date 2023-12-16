<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.fullPath);
</script>

<template>
  <div class="container">
    <h1>Home page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta
      eveniet iste necessitatibus fugit commodi laboriosam magnam quos optio
      maxime in natus vero cum excepturi sed obcaecati itaque consequuntur.
      Molestiae!
    </p>
    <div>
      <RouterView />
    </div>
  </div>
</template>
