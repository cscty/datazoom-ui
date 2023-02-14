// 统一导出组件
import Button from "./dz-button.vue";
import Icon from "./dz-icon.vue";
import Backtop from "./dz-backtop.vue";
import Avatar from "./dz-avatar.vue";
import Affix from "./dz-affix.vue";
import Breadcrumb from "./dz-breadcrumb.vue";
import BreadcrumbItem from "./dz-breadcrumb-item.vue";
import Dropdown from "./dz-dropdown.vue";
import DropdownItem from "./dz-dropdown-item.vue";
const components = {
    Button,
    Icon,
    Backtop,
    Avatar,
    Affix,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownItem
};
const DzUI = {
    install(app) {
        Object.keys(components).forEach(key => {
            app.component(components[key].name, components[key]);
        });
    },
};
export default DzUI;
