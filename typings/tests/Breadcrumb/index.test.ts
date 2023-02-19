import { mount } from "@vue/test-utils";
import Breadcrumb from "@packages/Breadcrumb/index.vue";
describe("测试dz-breadcrumb", () => {
    it("测试组件间传值是否正常", () => {
        const wrapper = mount(Breadcrumb, {
            props: {
                separator: "/",
            },
        });
        expect(wrapper.vm.separator).toBe("/");
    });
});
