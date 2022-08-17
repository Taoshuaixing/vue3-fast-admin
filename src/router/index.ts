import {
	createRouter,
	createWebHistory,
	Router,
	RouteRecordRaw,
} from 'vue-router';
import NProgress from '@/utils/nprogress';
import { System, Dashboard, Demo, AsyncRooutes } from './modules';

const routes: Array<RouteRecordRaw> = [
	...Dashboard,
	...System,
	...Demo,
	...AsyncRooutes,
];

//生成路由
const router: Router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

//未授权的白名单
const whiteList = ['/login'];

//获取本地token，判断是否已登录
const userToken = localStorage.getItem('fast_token') || '';

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */

router.beforeEach((to, _from, next) => {
	//设置页面标题
	NProgress.start();
	document.title = (to.meta.title as string) || import.meta.env.BASE_URL;
	if (userToken) {
		if (to.path === '/login') {
			next('/');
			return;
		}
		next();
	} else if (whiteList.includes(to.path)) {
		next();
	} else {
		// 重定向路由
		next('/login');
	}
});

// 路由跳转之后的监听操作
router.afterEach((to, from) => {
	NProgress.done();
});

export default router;
