import { App } from "vue";
import BreadcrumbItem from "./index.vue";
BreadcrumbItem.install = function (app: App) {
    // 全局注册
    app.component(BreadcrumbItem.name, BreadcrumbItem);
};
export default BreadcrumbItem;
