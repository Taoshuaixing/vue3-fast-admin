import Mock from 'mockjs';
import menuList from './menuList';

Mock.setup({
	timeout: '200-600',
});

Mock.mock(/\menuList/, 'get', () => {
	return {
		code: 0,
		result: menuList,
	};
});
