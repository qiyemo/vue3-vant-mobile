import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'

import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'

import viewport from 'postcss-mobile-forever'
import autoprefixer from 'autoprefixer'

import { viteVConsole } from 'vite-plugin-vconsole'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

import UnoCSS from 'unocss/vite'

// 打包文件压缩插件
import { compression } from 'vite-plugin-compression2'


export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    clearScreen: false,
    plugins: [
      VueRouter({
        routesFolder: 'src/views',
        dts: 'src/typed-router.d.ts',
      }),

      vue(),
      vueJsx(),
      visualizer(),
      UnoCSS(),
      mockDevServerPlugin(),

      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      Components({
        extensions: ['vue'],
        resolvers: [VantResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
      }),

      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
        ],
        imports: [
          VueRouterAutoImports,
          {
            'vue-router/auto': ['useLink'],
          },
          'vue',
          'vitest',
        ],
        dts: 'src/auto-imports.d.ts',
      }),

      viteVConsole({
        entry: [path.resolve('src/main.ts')],
        // 在开发环境中开启
        enabled: command === 'serve',
        config: {
          maxLogNumber: 1000,
          theme: 'light',
        },
      }),
      // 打包文件压缩
      // compression({
      //   threshold: 10000, // 只有超过 2k 的文件才执行压缩
      //   deleteOriginalAsserts: false, // 设置是否删除原文件
      //   skipIfLargerOrEqual: false // 如果压缩后的文件大小与原文件大小一致或者更大时，不进行压缩
      // })
    ],

    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          viewport({
            appSelector: '#app',
            viewportWidth: 375,
            maxDisplayWidth: 600,
          }),
        ],
      },
    },

    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
    },

    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },
    },

    server: {
      host: true,
      port: 3000,
      // proxy: {
      //   '/api': {
      //     target: 'http://192.168.2.45:6003',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ''),
      //   },
      // },
      hmr: {
        overlay: false
      }
    }
  }
}
