import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: [
      {
        find:'@components',
        replacement: resolve(__dirname, './src/components')
      },
      {
        find:'@pages',
        replacement: resolve(__dirname, './src/pages')
      },
      {
        find:'@authentication',
        replacement: resolve(__dirname, './src/context')
      },
      {
        find:'@API',
        replacement: resolve(__dirname, './src/data')
      },
      {
        find: '@utils',
        replacement: resolve(__dirname, './src/utils')
      },
      {
        find: '@img',
        replacement: resolve(__dirname, './src/img')
      }
    ]
  }
})
