import type { App, Plugin } from "vue";
// 统一导出组件
import Button from "./Button/index";
import Icon from "./Icon";
import Backtop from "./Backtop";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Empty from "./Empty";
import Skeleton from "./Skeleton";
import SkeletonItem from "./Skeleton/skeleton-item";
import Result from "./Result";
import Affix from "./Affix";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./Breadcrumb-item";
const components = {
    Button,
    Icon,
    Backtop,
    Avatar,
    Badge,
    Empty,
    Skeleton,
    SkeletonItem,
    Result,
    Affix,
    Breadcrumb,
    BreadcrumbItem,
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
    Badge,
    Empty,
    Skeleton,
    SkeletonItem,
    Result,
};
// 统一暴露
export default DzUI;
