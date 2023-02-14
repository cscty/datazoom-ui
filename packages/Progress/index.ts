import { App } from "vue";
import Progress from "./index.vue";
Progress.install = function (app: App) {
    // 全局注册
    app.component(Progress.name, Progress);
};
export default Progress;
