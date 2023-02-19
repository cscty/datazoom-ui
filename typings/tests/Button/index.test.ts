import { mount } from "@vue/test-utils";
import Button from "@packages/Button/index.vue";
describe("测试dz-button", () => {
    it("测试修改了传入不同size是否更换样式", () => {
        const wrapper = mount(Button, {
            props: {
                size: "small",
            },
        });
        expect(wrapper.classes()).toContain("dz-button-small");
    });
    it("测试修改了传入不同type是否更换样式", () => {
        const wrapper = mount(Button, {
            props: {
                type: "primary",
            },
        });
        expect(wrapper.classes()).toContain("dz-button-primary");
    });
    // ......一组测试
});
