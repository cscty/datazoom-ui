import { App } from "vue";
import Breadcrumb from "./index.vue";
Breadcrumb.install = function (app: App) {
    // 全局注册
    app.component(Breadcrumb.name, Breadcrumb);
};
export default Breadcrumb;
