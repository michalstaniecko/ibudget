import 'bootstrap/dist/css/bootstrap.css';

import {createApp, markRaw} from 'vue'
import App from './App.vue'
import router from "./router";
import {createPinia} from "pinia";

const pinia = createPinia();
const app = createApp(App);

pinia.use(({store}) => {
    store.router = markRaw(router);
})

app.use(router);
app.use(pinia);

app.mount('#app');
