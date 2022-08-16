import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/login',
		component: () => import('@/views/login/index.vue'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/404',
		component: () => import('@/views/error-page/404.vue'),
		meta: {
			title: '404',
		},
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
			{
				path: '/menu',
				name: 'Menu',
				component: () => import('@/views/menu/index.vue'),
				meta: {
					title: '菜单',
					icon: 'el-icon-menu',
					roles: ['admin', 'editor'],
				},
			},
			{
				path: '/star',
				component: () => import('@/views/star/index.vue'),
				name: 'Star',
				meta: {
					title: '图表',
					icon: 'el-icon-s-data',
					roles: ['admin', 'editor'],
				},
			},
			{
				path: '/xueyue',
				component: () => import('@/views/xueyue/index.vue'),
				name: 'Xueyue',
				meta: {
					title: '雪月',
					icon: 'el-icon-s-flag',
					roles: ['admin', 'editor'],
				},
			},
		],
	},
];

export const asyncRoutes = [];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
});

export default router;
