import type { App, Plugin } from "vue";
// 统一导出组件
import Button from "./Button/index";
import Icon from "./Icon";
import Backtop from "./Backtop";
import Avatar from "./Avatar";
import Affix from "./Affix";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./Breadcrumb-item";
import Modal from "./Modal";
import Progress from "./Progress";
import Drawer from "./Drawer";
const components = {
    Button,
    Icon,
    Backtop,
    Avatar,
    Affix,
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    Progress,
    Drawer,
};
const DzUI: Plugin = {
    install(app: App) {
        Object.keys(components).forEach(key => {
            app.use(components[key]);
        });
    },
};
// 满足用户按需引入需求
export {
    Button,
    Icon,
    Backtop,
    Avatar,
    Affix,
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    Progress,
    Drawer,
};
// 统一暴露
export default DzUI;
