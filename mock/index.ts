import userMockList from './modules/user';
import Mock from 'mockjs';
import menuList from './modules/menuList';

Mock.setup({
	timeout: '200-600',
});

Mock.mock(/\menuList/, 'get', () => {
	return {
		code: 0,
		result: menuList,
	};
});
