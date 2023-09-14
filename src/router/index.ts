import {createRouter, createWebHistory} from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: LoginView
        }
    ]
});

export default router;
