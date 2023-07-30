import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home/Home.vue'
import Disciplinas from '../components/Disciplinas/Disciplinas.vue'
import Contacto from '../components/Contacto/Contacto.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/disci', component: Disciplinas },
    { path: '/contacto', component: Contacto },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;