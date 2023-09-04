import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'

/*import homePage from "@/components/HomePage.vue";*/

const app = createApp(App);
app.use(router);
app.mount('#app');
