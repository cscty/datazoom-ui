import type { App, Plugin } from "vue";
// 统一导出组件
import Button from "./Button/index";
import Icon from "./Icon";
import Backtop from "./Backtop";
const components = {
    Button,
    Icon,
    Backtop,
};
const DzUI: Plugin = {
    install(app: App) {
        Object.keys(components).forEach(key => {
            app.use(components[key]);
        });
    },
};
// 满足用户按需引入需求
export { Button, Icon, Backtop };
// 统一暴露
export default DzUI;
