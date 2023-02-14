import { App } from "vue";
import Modal from "./index.vue";
Modal.install = function (app: App) {
    // 全局注册
    app.component(Modal.name, Modal);
};
export default Modal;
