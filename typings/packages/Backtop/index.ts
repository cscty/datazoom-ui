import { App } from "vue";
import Backtop from "./index.vue";
Backtop.install = function (app: App) {
    // 全局注册
    app.component(Backtop.name, Backtop);
};
export default Backtop;
