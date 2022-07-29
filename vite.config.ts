import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(process.cwd(), '/src'),
			'#': resolve(process.cwd(), '/types'),
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
