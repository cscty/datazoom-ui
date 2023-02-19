import type { App } from "vue";
import Badge from "./index.vue";

Badge.install = (app: App) => {
    app.component(Badge.name, Badge);
};

export default Badge;
