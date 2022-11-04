import { configure, start, done } from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import router from './router';
import { getToken, getRoles } from './utils/auth'; // get token from cookie

configure({ showSpinner: false });

const whiteList = ['/login'];

router.beforeEach(async (to: any, from: any, next) => {
	console.log('beforeEach:from=>', from);
	start();
	const hasToken = getToken();
	if (hasToken) {
		console.log('true');

		if (to.path === '/login') {
			next({ path: '/' });
			done();
		} else {
			const roles = getRoles();
			console.log(roles);
		}
	} else {
		console.log('false');

		if (whiteList.includes(to.path)) {
			next();
		} else {
			next('/login');
			done();
		}
	}
});

router.afterEach(() => {
	done();
});
