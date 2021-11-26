import { defineConfig } from 'vite';
import { resolve } from 'path';

import windi from 'vite-plugin-windicss';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue(), windi()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
