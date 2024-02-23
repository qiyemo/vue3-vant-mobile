// vite.config.ts
import path from "node:path";
import process from "node:process";
import { loadEnv } from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.5_less@4.2.0_sass@1.70.0_terser@5.27.0/node_modules/vite/dist/node/index.js";
import { visualizer } from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.9.6/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import Components from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.6_vue@3.4.15/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/unplugin-auto-import@0.17.3_rollup@4.9.6/node_modules/unplugin-auto-import/dist/vite.js";
import VueRouter from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/unplugin-vue-router@0.7.0_rollup@4.9.6_vue-router@4.2.5_vue@3.4.15/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/unplugin-vue-router@0.7.0_rollup@4.9.6_vue-router@4.2.5_vue@3.4.15/node_modules/unplugin-vue-router/dist/index.mjs";
import { VantResolver } from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/unplugin-vue-components@0.26.0_rollup@4.9.6_vue@3.4.15/node_modules/unplugin-vue-components/dist/resolvers.js";
import vue from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/@vitejs+plugin-vue@5.0.3_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import legacy from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/@vitejs+plugin-legacy@5.2.0_terser@5.27.0_vite@5.0.12/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import vueJsx from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.12_vue@3.4.15/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import viewport from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/postcss-mobile-forever@4.1.1/node_modules/postcss-mobile-forever/index.js";
import autoprefixer from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/autoprefixer@10.4.17/node_modules/autoprefixer/lib/autoprefixer.js";
import { viteVConsole } from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/vite-plugin-vconsole@2.0.1/node_modules/vite-plugin-vconsole/dist/main.mjs";
import mockDevServerPlugin from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/vite-plugin-mock-dev-server@1.4.7_rollup@4.9.6_vite@5.0.12/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import UnoCSS from "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/unocss@0.58.3_rollup@4.9.6_vite@5.0.12/node_modules/unocss/dist/vite.mjs";
import "file:///E:/momei/open-source/my-project/frontend/vue3-vant-mobile/node_modules/.pnpm/vite-plugin-compression2@0.11.0_rollup@4.9.6/node_modules/vite-plugin-compression2/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\momei\\open-source\\my-project\\frontend\\vue3-vant-mobile";
var vite_config_default = ({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    clearScreen: false,
    plugins: [
      VueRouter({
        routesFolder: "src/views",
        dts: "src/typed-router.d.ts"
      }),
      vue(),
      vueJsx(),
      visualizer(),
      UnoCSS(),
      mockDevServerPlugin(),
      legacy({
        targets: ["defaults", "not IE 11"]
      }),
      Components({
        extensions: ["vue"],
        resolvers: [VantResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: "src/components.d.ts"
      }),
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/
        ],
        imports: [
          VueRouterAutoImports,
          {
            "vue-router/auto": ["useLink"]
          },
          "vue",
          "vitest"
        ],
        dts: "src/auto-imports.d.ts"
      }),
      viteVConsole({
        entry: [path.resolve("src/main.ts")],
        // 在开发环境中开启
        enabled: command === "serve",
        config: {
          maxLogNumber: 1e3,
          theme: "light"
        }
      })
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
            appSelector: "#app",
            viewportWidth: 375,
            maxDisplayWidth: 600
          })
        ]
      }
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048
    },
    resolve: {
      alias: {
        "~@": path.join(__vite_injected_original_dirname, "./src"),
        "@": path.join(__vite_injected_original_dirname, "./src"),
        "~": path.join(__vite_injected_original_dirname, "./src/assets")
      }
    },
    server: {
      host: true,
      port: 3e3,
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
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxtb21laVxcXFxvcGVuLXNvdXJjZVxcXFxteS1wcm9qZWN0XFxcXGZyb250ZW5kXFxcXHZ1ZTMtdmFudC1tb2JpbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXG1vbWVpXFxcXG9wZW4tc291cmNlXFxcXG15LXByb2plY3RcXFxcZnJvbnRlbmRcXFxcdnVlMy12YW50LW1vYmlsZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovbW9tZWkvb3Blbi1zb3VyY2UvbXktcHJvamVjdC9mcm9udGVuZC92dWUzLXZhbnQtbW9iaWxlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAnbm9kZTpwcm9jZXNzJ1xuaW1wb3J0IHsgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdHlwZSB7IENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuXG5pbXBvcnQgdmlld3BvcnQgZnJvbSAncG9zdGNzcy1tb2JpbGUtZm9yZXZlcidcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuXG5pbXBvcnQgeyB2aXRlVkNvbnNvbGUgfSBmcm9tICd2aXRlLXBsdWdpbi12Y29uc29sZSdcbmltcG9ydCBtb2NrRGV2U2VydmVyUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlcidcblxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcblxuLy8gXHU2MjUzXHU1MzA1XHU2NTg3XHU0RUY2XHU1MzhCXHU3RjI5XHU2M0QyXHU0RUY2XG5pbXBvcnQgeyBjb21wcmVzc2lvbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWNvbXByZXNzaW9uMidcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kLCBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHJvb3QpXG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBlbnYuVklURV9BUFBfUFVCTElDX1BBVEgsXG4gICAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIFZ1ZVJvdXRlcih7XG4gICAgICAgIHJvdXRlc0ZvbGRlcjogJ3NyYy92aWV3cycsXG4gICAgICAgIGR0czogJ3NyYy90eXBlZC1yb3V0ZXIuZC50cycsXG4gICAgICB9KSxcblxuICAgICAgdnVlKCksXG4gICAgICB2dWVKc3goKSxcbiAgICAgIHZpc3VhbGl6ZXIoKSxcbiAgICAgIFVub0NTUygpLFxuICAgICAgbW9ja0RldlNlcnZlclBsdWdpbigpLFxuXG4gICAgICBsZWdhY3koe1xuICAgICAgICB0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddLFxuICAgICAgfSksXG5cbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV0sXG4gICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcbiAgICAgICAgZHRzOiAnc3JjL2NvbXBvbmVudHMuZC50cycsXG4gICAgICB9KSxcblxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAvXFwuW3RqXXN4PyQvLFxuICAgICAgICAgIC9cXC52dWUkLyxcbiAgICAgICAgICAvXFwudnVlXFw/dnVlLyxcbiAgICAgICAgXSxcbiAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICd2dWUnLFxuICAgICAgICAgICd2aXRlc3QnLFxuICAgICAgICBdLFxuICAgICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgfSksXG5cbiAgICAgIHZpdGVWQ29uc29sZSh7XG4gICAgICAgIGVudHJ5OiBbcGF0aC5yZXNvbHZlKCdzcmMvbWFpbi50cycpXSxcbiAgICAgICAgLy8gXHU1NzI4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTJEXHU1RjAwXHU1NDJGXG4gICAgICAgIGVuYWJsZWQ6IGNvbW1hbmQgPT09ICdzZXJ2ZScsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIG1heExvZ051bWJlcjogMTAwMCxcbiAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgLy8gXHU2MjUzXHU1MzA1XHU2NTg3XHU0RUY2XHU1MzhCXHU3RjI5XG4gICAgICAvLyBjb21wcmVzc2lvbih7XG4gICAgICAvLyAgIHRocmVzaG9sZDogMTAwMDAsIC8vIFx1NTNFQVx1NjcwOVx1OEQ4NVx1OEZDNyAyayBcdTc2ODRcdTY1ODdcdTRFRjZcdTYyNERcdTYyNjdcdTg4NENcdTUzOEJcdTdGMjlcbiAgICAgIC8vICAgZGVsZXRlT3JpZ2luYWxBc3NlcnRzOiBmYWxzZSwgLy8gXHU4QkJFXHU3RjZFXHU2NjJGXHU1NDI2XHU1MjIwXHU5NjY0XHU1MzlGXHU2NTg3XHU0RUY2XG4gICAgICAvLyAgIHNraXBJZkxhcmdlck9yRXF1YWw6IGZhbHNlIC8vIFx1NTk4Mlx1Njc5Q1x1NTM4Qlx1N0YyOVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkyN1x1NUMwRlx1NEUwRVx1NTM5Rlx1NjU4N1x1NEVGNlx1NTkyN1x1NUMwRlx1NEUwMFx1ODFGNFx1NjIxNlx1ODAwNVx1NjZGNFx1NTkyN1x1NjVGNlx1RkYwQ1x1NEUwRFx1OEZEQlx1ODg0Q1x1NTM4Qlx1N0YyOVxuICAgICAgLy8gfSlcbiAgICBdLFxuXG4gICAgY3NzOiB7XG4gICAgICBwb3N0Y3NzOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICBhdXRvcHJlZml4ZXIoKSxcbiAgICAgICAgICB2aWV3cG9ydCh7XG4gICAgICAgICAgICBhcHBTZWxlY3RvcjogJyNhcHAnLFxuICAgICAgICAgICAgdmlld3BvcnRXaWR0aDogMzc1LFxuICAgICAgICAgICAgbWF4RGlzcGxheVdpZHRoOiA2MDAsXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBidWlsZDoge1xuICAgICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjA0OCxcbiAgICB9LFxuXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ35AJzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICdAJzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAgICd+JzogcGF0aC5qb2luKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cycpLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogMzAwMCxcbiAgICAgIC8vIHByb3h5OiB7XG4gICAgICAvLyAgICcvYXBpJzoge1xuICAgICAgLy8gICAgIHRhcmdldDogJ2h0dHA6Ly8xOTIuMTY4LjIuNDU6NjAwMycsXG4gICAgICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgLy8gICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyB9LFxuICAgICAgaG1yOiB7XG4gICAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLE9BQU8sVUFBVTtBQUMxWCxPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlO0FBR3hCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZUFBZTtBQUN0QixTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUVuQixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFFekIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyx5QkFBeUI7QUFFaEMsT0FBTyxZQUFZO0FBR25CLE9BQTRCO0FBekI1QixJQUFNLG1DQUFtQztBQTRCekMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsU0FBUyxLQUFLLE1BQTZCO0FBQzNELFFBQU0sT0FBTyxRQUFRLElBQUk7QUFDekIsUUFBTSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBRTlCLFNBQU87QUFBQSxJQUNMLE1BQU0sSUFBSTtBQUFBLElBQ1YsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLE1BQ1AsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsS0FBSztBQUFBLE1BQ1AsQ0FBQztBQUFBLE1BRUQsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1Asb0JBQW9CO0FBQUEsTUFFcEIsT0FBTztBQUFBLFFBQ0wsU0FBUyxDQUFDLFlBQVksV0FBVztBQUFBLE1BQ25DLENBQUM7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUNULFlBQVksQ0FBQyxLQUFLO0FBQUEsUUFDbEIsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLFFBQzFCLFNBQVMsQ0FBQyxVQUFVLFlBQVk7QUFBQSxRQUNoQyxLQUFLO0FBQUEsTUFDUCxDQUFDO0FBQUEsTUFFRCxXQUFXO0FBQUEsUUFDVCxTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsWUFDRSxtQkFBbUIsQ0FBQyxTQUFTO0FBQUEsVUFDL0I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUVELGFBQWE7QUFBQSxRQUNYLE9BQU8sQ0FBQyxLQUFLLFFBQVEsYUFBYSxDQUFDO0FBQUE7QUFBQSxRQUVuQyxTQUFTLFlBQVk7QUFBQSxRQUNyQixRQUFRO0FBQUEsVUFDTixjQUFjO0FBQUEsVUFDZCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0YsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBT0g7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLFNBQVM7QUFBQSxZQUNQLGFBQWE7QUFBQSxZQUNiLGVBQWU7QUFBQSxZQUNmLGlCQUFpQjtBQUFBLFVBQ25CLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUVBLE9BQU87QUFBQSxNQUNMLGNBQWM7QUFBQSxNQUNkLHVCQUF1QjtBQUFBLElBQ3pCO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxNQUFNLEtBQUssS0FBSyxrQ0FBVyxPQUFPO0FBQUEsUUFDbEMsS0FBSyxLQUFLLEtBQUssa0NBQVcsT0FBTztBQUFBLFFBQ2pDLEtBQUssS0FBSyxLQUFLLGtDQUFXLGNBQWM7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUU4sS0FBSztBQUFBLFFBQ0gsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
