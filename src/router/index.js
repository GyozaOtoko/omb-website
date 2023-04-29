import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Collection from '../views/CollectionPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/collection',
        name: 'collection',
        component: Collection,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;