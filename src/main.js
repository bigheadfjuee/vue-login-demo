import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

// createApp(App).use(router).use( VueAxios, axios).mount('#app')

const app = createApp(App);
app.use(router)
app.use( VueAxios, axios)
app.use(VueToast);
app.mount('#app');