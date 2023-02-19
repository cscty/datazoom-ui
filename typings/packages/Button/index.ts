import { App } from "vue";
import Button from "./index.vue";
Button.install = function (app: App) {
    // 全局注册
    app.component(Button.name, Button);
};
export default Button;
