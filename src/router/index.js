import { createRouter, createWebHistory } from "vue-router";
import OMBiz from "../views/OMBizPage.vue";
import Collection from "../views/CollectionPage.vue";
import Natmonkeys from "../views/NatmonkeysPage.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/ombiz",
    name: "OMBiz",
    component: OMBiz,
  },
  {
    path: "/collection",
    name: "collection",
    component: Collection,
  },
  {
    path: "/natmonkeys",
    name: "natmonkeys",
    component: Natmonkeys,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
