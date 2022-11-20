import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const pathReslove = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': pathReslove('./src'),
      views: pathReslove('./src/views'),
      '#': resolve(__dirname, 'src/@types')
    }
  }
})
