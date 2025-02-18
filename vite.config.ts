import { defineConfig } from 'vite'
import requireTransform from 'vite-plugin-require-transform'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),requireTransform({
    fileRegex: /.js$|.ts$|.vue$/
  })],
  base: '/'
  // build: {
  //   rollupOptions: {
  //     external: [/\.json$/]
  //   }
  // }
})
