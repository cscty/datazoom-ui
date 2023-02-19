import type { App } from "vue";
import Result from "./index.vue";

Result.install = (app: App) => {
    app.component(Result.name, Result);
};

export default Result;
