// 统一导出组件
import Button from "./dz-button.vue";
import Icon from "./dz-icon.vue";
import Backtop from "./dz-backtop.vue";
import Avatar from "./dz-avatar.vue";
import Affix from "./dz-affix.vue";
import Breadcrumb from "./dz-breadcrumb.vue";
import BreadcrumbItem from "./dz-breadcrumb-item.vue";
<<<<<<< HEAD
import Badge from "./dz-badge.vue";
import Empty from "./dz-empty.vue";
import Result from "./dz-result.vue";
import Skeleton from "./dz-skeleton.vue";
import SkeletonItem from "./dz-skeleton-item.vue";
=======
>>>>>>> parent of bb77a2f (fix: display)
import Dropdown from "./dz-dropdown.vue";
import DropdownItem from "./dz-dropdown-item.vue";
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
<<<<<<< HEAD
    Badge,
    Empty,
    Result,
    Skeleton,
    SkeletonItem,
=======
>>>>>>> parent of bb77a2f (fix: display)
    Dropdown,
    DropdownItem,
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
