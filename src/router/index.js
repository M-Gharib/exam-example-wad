import { createRouter, createWebHashHistory } from 'vue-router'
import ScreeningManagement from "../views/ScreeningManagement.vue";
import AllScreenings from "../views/AllScreenings.vue";

const routes = [
    {
        path: "/",
        name: "AllScreenings",
        component: AllScreenings,
    },
    {
        path: "/screeningmanagement",
        name: "ScreeningManagement",
        component: ScreeningManagement,
    },
    { // will route to the home page if none of the previous routes apply
        path: "/:catchAll(.*)",
        redirect: "/",
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
