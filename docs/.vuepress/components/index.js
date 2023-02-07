// 统一导出组件
import Button from "./dz-button.vue";
import Icon from "./dz-icon.vue";
import Backtop from "./dz-backtop.vue";
import Avatar from "./dz-avatar.vue";
const components = {
    Button,
    Icon,
    Backtop,
    Avatar,
};
const DzUI = {
    install(app) {
        Object.keys(components).forEach(key => {
            app.component(components[key].name, components[key]);
        });
    },
};
export default DzUI;
