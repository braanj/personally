import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  scrollBehavior: () => {
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      // @ts-ignore
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/post/:slug",
      name: "Post",
      // @ts-ignore
      component: () => import("../views/SinglePostView.vue"),
    },
  ],
});

export default router;
