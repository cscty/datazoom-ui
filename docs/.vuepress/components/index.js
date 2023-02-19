// 统一导出组件
import Button from "./dz-button.vue";
import Icon from "./dz-icon.vue";
import Backtop from "./dz-backtop.vue";
import Avatar from "./dz-avatar.vue";
import Affix from "./dz-affix.vue";
import Breadcrumb from "./dz-breadcrumb.vue";
import BreadcrumbItem from "./dz-breadcrumb-item.vue";
import Badge from "./dz-badge.vue";
import Empty from "./dz-empty.vue";
import Result from "./dz-result.vue";
import Skeleton from "./dz-skeleton.vue";
import SkeletonItem from "./dz-skeleton-item.vue";
const components = {
    Button,
    Icon,
    Backtop,
    Avatar,
    Affix,
    Breadcrumb,
    BreadcrumbItem,
    Badge,
    Empty,
    Result,
    Skeleton,
    SkeletonItem,
};
const DzUI = {
    install(app) {
        Object.keys(components).forEach(key => {
            app.component(components[key].name, components[key]);
        });
    },
};
export default DzUI;
