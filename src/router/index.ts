import { createRouter, createWebHistory } from "vue-router";
import Main from '../main.vue'
import Guide from '../pages/guide.vue'
import Best50 from '../pages/best50.vue'
import Blogger from '../pages/blogger.vue'
import NotFound from '../pages/NotFound.vue'
import Hello from '../pages/Hello.vue'
export const routes = [
    {
        path: '/',
        component: Hello,
    },
    {
        path: "/tools",
        component: Main,
        children: [
        {
            path: "/tools/guide",
            name: "Guide",
            component: Guide,
        },
        {
            path: "/tools/best50",
            name: "Best 50",
            component: Best50,
        },
        {
            path: "/tools/blogger",
            name: "Blogger",
            component: Blogger,
        },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: "404"
        }
    },

]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
