import { App } from "vue";
import Icon from "./index.vue";
Icon.install = function (app: App) {
    // 全局注册
    app.component(Icon.name, Icon);
};
export default Icon;
