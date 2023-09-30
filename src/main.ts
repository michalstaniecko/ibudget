import 'bootstrap/dist/css/bootstrap.css';

import {createApp, markRaw} from 'vue'
import App from './App.vue'
import router from "./router";
import {createPinia} from "pinia";
import BaseContainer from "@/components/Layout/BaseContainer.vue";

const pinia = createPinia();
const app = createApp(App);

pinia.use(({store}) => {
    store.router = markRaw(router);
})

app.use(router);
app.use(pinia);

app.component('base-container', BaseContainer);

app.mount('#app');
