// css 重置
import "normalize.css";
import { createApp } from "vue";

import App from "@/App.vue";
const app = createApp(App);
// 发布至npm后测试
// 全局引入
// import "datazoom-ui/dist/theme-chalk/index.css";
// import DzUI from "datazoom-ui";
// app.use(DzUI);
// 按需引入
// import "datazoom-ui/dist/theme-chalk/Button/index.css";
// import {Button} from "datazoom-ui";
// app.use(Button);

import "@packages/theme-chalk/index.less";
import DzUI from "@packages/index";
app.use(DzUI);
app.mount("#app");
