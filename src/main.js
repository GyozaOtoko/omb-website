import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');

AOS.init()