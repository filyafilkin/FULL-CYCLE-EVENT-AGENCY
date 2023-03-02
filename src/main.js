import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";

const app = createApp(App);
app.use(router);
app.mount('#app');

import VueKinesis from "vue-kinesis";
app.use(VueKinesis);

import Vue3Marquee from 'vue3-marquee'
app.use(Vue3Marquee);
