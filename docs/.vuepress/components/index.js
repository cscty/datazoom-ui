// 统一导出组件
import Button from "./dz-button.vue";
import Icon from "./dz-icon.vue";
import Backtop from "./dz-backtop.vue";
import Avatar from "./dz-avatar.vue";
import Affix from "./dz-affix.vue";
import Breadcrumb from "./dz-breadcrumb.vue";
import BreadcrumbItem from "./dz-breadcrumb-item.vue";
import Modal from "./dz-modal.vue";
import Progress from "./dz-progress.vue";
import Drawer from "./dz-drawer.vue";
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
    Drawer
};
const DzUI = {
    install(app) {
        Object.keys(components).forEach(key => {
            app.component(components[key].name, components[key]);
        });
    },
};
export default DzUI;
