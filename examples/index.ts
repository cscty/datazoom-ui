import { createApp } from "vue";
import App from "@/App.vue";
import DzUI from "@packages/index";
import "@packages/theme-chalk/index.less";
const app = createApp(App);
app.use(DzUI);
app.mount("#app");
