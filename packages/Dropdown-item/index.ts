import { App } from "vue";
import DropdownItem from "./index.vue";
DropdownItem.install = function (app: App) {
    // 全局注册
    app.component(DropdownItem.name, DropdownItem);
};
export default DropdownItem;
