import { resolve } from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

const pathReslove = (dir: string) => resolve(__dirname, dir)

export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true
  return {
    plugins: [
      vue(),
      viteMockServe({
        supportTs: true,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `
      })
    ],
    server: {
      port: 8080,
      open: false,
      proxy: {
        '/api': {
          target: 'http://admin.xueyueob.cn/api',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp('^/api'), '')
        }
      }
    },
    resolve: {
      alias: {
        '@': pathReslove('./src'),
        views: pathReslove('./src/views'),
        '#': resolve(__dirname, 'src/@types')
      }
    }
  }
}
