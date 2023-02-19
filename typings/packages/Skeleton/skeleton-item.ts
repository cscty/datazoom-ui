import type { App } from "vue";
import SkeletonItem from "./skeleton-item.vue";
SkeletonItem.install = function (app: App) {
    // 全局注册
    app.component(SkeletonItem.name, SkeletonItem);
};
export default SkeletonItem;
