import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import HomeView from "../views/HomeView.vue";

const routes = ["news", "tutorials", "design"].map((item) => {
  return {
    path: `/posts/${item}/:slug`,
    name: `${item} post`,
    // @ts-ignore
    component: () => import("../views/SinglePostView.vue"),
  };
});

routes.push(
  ...["news", "tutorials", "design"].map((item) => {
    return {
      path: "/posts/",
      name: `${item} posts`,
      // @ts-ignore
      component: () => import("../views/CollectionView.vue"),
      children: [
        {
          path: `/posts/${item}/`,
          name: `${item} posts collection`,
          // @ts-ignore
          component: () => import("../views/SingleCategory.vue"),
        },
        {
          path: `/posts/${item}/category/:slug`,
          name: `${item} category`,
          // @ts-ignore
          component: () => import("../views/SingleCategory.vue"),
        },
      ],
    };
  })
);

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
    ...routes,
  ],
});

export default router;
