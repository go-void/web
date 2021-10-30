import { createApp } from 'vue';
import { createPinia } from 'pinia';

import app from './app.vue';
import store from './router';

// Import WindiCSS
import 'virtual:windi.css';

createApp(app).use(store).use(createPinia()).mount('#app');
