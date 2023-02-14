import { mount } from "@vue/test-utils";
import Dropdown from "@packages/Dropdown/index.vue";

describe("测试dz-dropdown", () => {
    it("测试组件间传值是否正常", () => {
        const wrapper = mount(Dropdown, {
            props: {
                trigger: "click",
                hideOnClick: true,
                maxHeight: 600,
                showtimeout: 0.5,
            },
        });
        expect(wrapper.vm.trigger).toBe("click");
        expect(wrapper.vm.hideOnClick).toBe(true);
        expect(wrapper.vm.maxHeight).toBe(600);
        expect(wrapper.vm.showtimeout).toBe(0.5);
    });
    it("测试修改了传入不同size是否更换样式", () => {
        const wrapper = mount(Dropdown, {
            props: {
                size: "small",
            },
        });
        expect(wrapper.classes()).toContain("dz-dropdown-small");
    });
});
