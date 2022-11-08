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
	{
		path: '/',
		component: () => import('@/layout/index.vue'),
		redirect: '/home',
		children: [
			{
				path: '/home',
				component: () => import('@/views/home/index.vue'),
				name: 'Home',
				meta: { title: '首页', icon: 'el-icon-s-home', affix: true },
			},
			{
				path: '/setting',
				component: () => import('@/views/setting/index.vue'),
				name: 'Setting',
				meta: { title: '设置', icon: 'el-icon-setting', roles: ['admin'] },
			},
		],
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
});

export default router;
