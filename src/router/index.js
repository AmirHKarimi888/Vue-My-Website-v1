import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
        },
        {
            name: "blog",
            path: "/blog",
            component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
        },
        {
            name: "page",
            path: "/blog/page:id",
            component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
        },
        {
            name: "about",
            path: "/about",
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        },
        {
            name: "admin",
            path: "/admin",
            component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
            meta: {conditionalRoute: true}
        },
        {
            name: "pageAdmin",
            path: "/admin/page:id",
            component: () => import(/* webpackChunkName: "pageAdmin" */ '../views/PageAdmin.vue')
        },
        {
            name: "signup",
            path: "/signup",
            component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
        },
        {
            name: "login",
            path: "/login",
            component: () => import(/* webpackChunkName: "signup" */ '../views/Login.vue')
        },
        {
            name: "notFound",
            path: "/:pathMatch(.*)*",
            component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
        }
    ]
})