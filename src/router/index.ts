import {createRouter, createWebHashHistory} from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import {useAuthStore} from "@/stores/auth";

const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'home'
    },
    {
        path: '/login',
        component: LoginView,
        name: 'login'
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach(async (to, from) => {
    const authStore = useAuthStore();
    if (!authStore.isLogged && to.name !== 'login') {
        return {name: 'login'}
    }
    if (authStore.isLogged && to.name === 'login') {
        return false;
    }
});

export default router;
