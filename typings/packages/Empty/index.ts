import type { App } from "vue";
import Empty from "./index.vue";
Empty.install = function (app: App) {
    // 全局注册
    app.component(Empty.name, Empty);
};
export default Empty;
