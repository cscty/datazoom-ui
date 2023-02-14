import { App } from "vue";
import Drawer from "./index.vue";
Drawer.install = function (app: App) {
    // 全局注册
    app.component(Drawer.name, Drawer);
};
export default Drawer;
