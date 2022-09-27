import { createWebHistory,createRouter } from "vue-router";

import dashboard from '../pages/dashboard.vue'
import menulist from '../pages/menu.vue'
import notfound from '../components/notfound.vue'

const routes = [
    {
        path : '/',
        component : dashboard,
    },
    {
        path : '/dashboard',
        name : 'Dashboard',
        component : dashboard,
    },
    {
        path : '/menu-list',
        name : 'menu-list',
        component : menulist,
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'NotFound',
        component : notfound,
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;