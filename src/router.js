import { createWebHistory, createRouter } from "vue-router";
import PageMain from "./pages/PageMain.vue";
import PageLogin from "./pages/PageLogin.vue";
import { useAuthStore } from "./stores/auth";

const routes = [
  { path: "/", name: "Main", component: PageMain },
  { path: "/login", name: "Login", component: PageLogin },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.name !== "Login" && !authStore.user) next({ name: "Login" });
  else next();
});
