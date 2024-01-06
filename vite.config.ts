import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    vue(),
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 100 })
  ],
  server: {
    hmr: {
      protocol: 'ws', // WebSocketの使用
      host: 'localhost',
      port: 24678,
      path: '/vite-dev/',
    },
    // 他のサーバー設定...
  },
});