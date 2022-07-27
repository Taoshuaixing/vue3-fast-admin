export default [
	{
		id: 125,
		authName: '用户管理',
		icon: 'user',
		path: '/users',
		children: [
			{
				id: 110,
				authName: '用户列表',
				icon: 'menu',
				path: '/users',
				children: [],
				order: null,
			},
		],
		order: 1,
	},
	{
		id: 103,
		authName: '权限管理',
		icon: 'setting',
		path: '/rights',
		children: [
			{
				id: 111,
				authName: '角色列表',
				icon: 'menu',
				path: '/roles',
				children: [],
				order: null,
			},
			{
				id: 112,
				authName: '权限列表',
				icon: 'menu',
				path: '/rights',
				children: [],
				order: null,
			},
		],
		order: 2,
	},
	{
		id: 101,
		authName: '商品管理',
		icon: 'shop',
		path: '/goods',
		children: [
			{
				id: 104,
				authName: '商品列表',
				icon: 'menu',
				path: '/goods',
				children: [],
				order: 1,
			},
			{
				id: 115,
				authName: '分类参数',
				icon: 'menu',
				path: '/params',
				children: [],
				order: 2,
			},
			{
				id: 121,
				authName: '商品分类',
				icon: 'menu',
				path: '/categories',
				children: [],
				order: 3,
			},
		],
		order: 3,
	},
	{
		id: 102,
		authName: '订单管理',
		icon: 'tickets',
		path: '/orders',
		children: [
			{
				id: 107,
				authName: '订单列表',
				icon: 'menu',
				path: '/orders',
				children: [],
				order: null,
			},
		],
		order: 4,
	},
	{
		id: 145,
		authName: '数据统计',
		icon: 'pie-chart',
		path: '/reports',
		children: [
			{
				id: 146,
				authName: '数据报表',
				icon: 'menu',
				path: '/reports',
				children: [],
				order: null,
			},
		],
		order: 5,
	},
];