import type { App } from "vue";
import Skeleton from "./index.vue";
Skeleton.install = function (app: App) {
    // 全局注册
    app.component(Skeleton.name, Skeleton);
};
export default Skeleton;
