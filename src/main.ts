import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import 'element-plus/packages/theme-chalk/src/base.scss';
// import 'element-plus/lib/theme-chalk/index.css';

// global css
import './styles/index.scss';

import '/mock/index';
import router from './router';
import store from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import i18n from './i18n';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(ElementPlus).use(router).use(store).use(i18n).mount('#app');
