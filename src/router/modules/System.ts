import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const System: Array<RouteRecordRaw> = [
	{
		path: '/system',
		component: Layout,
		redirect: '/404',
		meta: {
			title: '系统目录',
			showMenu: true.valueOf,
			icon: 'icon-dicengjiagou',
		},
		children: [
			{
				path: '/404',
				component: () => import('@/views/system/404.vue'),
				meta: { title: '404页面' },
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		meta: { title: '登陆页面', icon: '', showMenu: false },
		component: () => import('@/views/system/login.vue'),
	},
];

export default System;
