import type { App } from "vue";
import Avatar from "./index.vue";

Avatar.install = (app: App) => {
    app.component(Avatar.name, Avatar);
};

export default Avatar;
