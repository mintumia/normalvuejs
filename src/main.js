import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
/*import homePage from "@/components/HomePage.vue";*/

const app = createApp(App);
app.use(router);
app.mount('#app');
