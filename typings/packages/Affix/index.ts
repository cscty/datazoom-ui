import type { App } from "vue";
import Affix from "./index.vue";

Affix.install = (app: App) => {
    app.component(Affix.name, Affix);
};

export default Affix;
