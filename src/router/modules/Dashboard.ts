import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const Dashboard: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		meta: { title: '首页', showMenu: true, icon: 'icon-shouye' },
		children: [
			{
				path: '/dashboard',
				meta: { title: 'dashboard', keepAlive: false, icon: 'icon-shouye' },
				component: () => import('@/views/dashboard/index.vue'),
			},
		],
	},
];

export default Dashboard;
