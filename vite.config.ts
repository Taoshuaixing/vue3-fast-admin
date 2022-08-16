import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
const srcPath = resolve(__dirname, 'src');
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@/': `${srcPath}/`,
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				additionalData: `@import "./src/styles/base.less";`,
			},
		},
	},
});
