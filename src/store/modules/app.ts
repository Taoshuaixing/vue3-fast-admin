export default {
	namespaced: true,
	state: () => ({
		token: localStorage.getItem('token') || '',
		siderType: true,
		lang: localStorage.getItem('lang') || 'zh',
	}),
	mutations: {
		setToken(state: { token: any }, token: string) {
			state.token = token;
			localStorage.setItem('token', token);
		},
		changeSiderType(state: { siderType: boolean }) {
			state.siderType = !state.siderType;
		},
		changLang(state: { lang: any }, lang: any) {
			state.lang = lang;
		},
	},
};
