import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/home' },
	{ path: '/', component: () => import('../views/home/index.vue') },
	{ path: '/home', component: () => import('../views/me/index.vue') },
	{ path: '/works', component: () => import('../views/works/index.vue') },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
