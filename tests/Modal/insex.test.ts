import { mount } from "@vue/test-utils";
import Modal from "@packages/Modal/index.vue";
describe("测试dz-modal", () => {
    it("测试组件间传值是否正常", () => {
        const wrapper = mount(Modal, {
            props: {
                isShow: false,
            },
        });
        console.log(wrapper.vm);
        expect(wrapper.vm.visible).toBe(false);
    });
    // ......一组测试
});
