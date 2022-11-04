import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [];

export const asyncRoutes = [
	{
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		meta: { title: '登录页面' },
	},
	{
		path: '/404',
		component: () => import('@/views/erro-page/404.vue'),
	},
	{
		path: '/401',
		component: () => import('@/views/error-page/401.vue'),
		meta: {
			title: '401',
		},
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
});

export default router;
