import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        meta: { title: "首页" },
        component: () => import('../views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;