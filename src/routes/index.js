import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home/Home.vue'
import Disciplinas from '../components/Disciplinas/Disciplinas.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/disci', component: Disciplinas }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;