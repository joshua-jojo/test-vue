import { createWebHistory,createRouter } from "vue-router";

import dashboard from '../pages/dashboard.vue'
import menulist from '../pages/menu.vue'
import login from '../pages/login.vue'
import notfound from '../components/notfound.vue'

const routes = [
    {
        path : '/',
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
        path : '/login',
        name : 'Login',
        component : login,
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

router.beforeEach((to,from,next) => {
    if(to.path == '/') {
        next({name : 'Dashboard'})
    }
    if(to.path == '/menu-list') {
        next({name : 'Dashboard'})
        alert('akses ditolak, sekarang ip anda telah kami deteksi')
    }
    else{
        next()
    }
    
})
export default router;