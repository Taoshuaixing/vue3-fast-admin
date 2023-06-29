/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-29 19:07:56
 */
import { resolve } from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'

const pathReslove = (dir: string) => resolve(__dirname, dir)

export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true
  return {
    base: '/',
    // base: command === 'serve' ? '/' : '/vue3-fast-admin/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use './src/styles/element.scss'as *;`
        }
      }
    },
    plugins: [
      vue(),
      viteCompression({
        verbose: true, // 输出压缩结果
        disable: false, // 是否禁用
        threshold: 1024 * 30, // 体积大于 30kb 才会被压缩,单位 b
        algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        ext: '.gz' // 生成的压缩包后缀
      }),
      viteMockServe({
        supportTs: true,
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `
      }),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      })
    ],
    server: {
      port: 8080,
      open: false,
      proxy: {
        '/api': {
          target: '',
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
    },
    build: {
      // sourcemap: true,
      manifest: true,
      minify: 'terser',
      chunkSizeWarningLimit: 500, // 提高静态资源大小警告
      terserOptions: {
        // 清除console和debugger
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'vuex'],
            'element-plus': ['element-plus'],
            echarts: ['echarts']
          }
        }
      }
    }
  }
}
