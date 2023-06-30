/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 10:44:37
 */
import { resolve } from 'path'
import { UserConfigExport, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
const CWD = process.cwd()

const pathReslove = (dir: string) => resolve(__dirname, dir)
export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = true
  const { VITE_BASE_API } = loadEnv(command, CWD)
  return {
    base: VITE_BASE_API,
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
    resolve: {
      alias: {
        '@': pathReslove('./src'),
        views: pathReslove('./src/views'),
        '#': resolve(__dirname, 'src/@types')
      }
    },
    build: {
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
      target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
      chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
      assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
      minify: 'terser', // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
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
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: false,
      cors: true, // 允许跨域
      proxy: {
        '/api': {
          target: 'https://vue3-fast-admin.vercel.app',
          changeOrigin: true,
          ws: true,
          secure: false,
          // rewrite: (path) => path.replace(new RegExp('^/api'), '')
          rewrite: (path) => path.replace('/api/', '/')
        }
      }
    }
  }
}
