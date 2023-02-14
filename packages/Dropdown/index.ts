import { App } from "vue";
import Dropdown from "./index.vue";
Dropdown.install = function (app: App) {
    // 全局注册
    app.component(Dropdown.name, Dropdown);
};
export default Dropdown;
