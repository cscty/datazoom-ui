import { mount } from "@vue/test-utils";
import DropdownItem from "@packages/Dropdown-item/index.vue";
describe("测试dz-dropdown-item", () => {
    it("测试组件间传值是否正常", () => {
        const wrapper = mount(DropdownItem, {
            props: {
                divided: true,
                disabled: true,
            },
        });
        expect(wrapper.vm.divided).toBe(true);
        expect(wrapper.vm.disabled).toBe(true);
    });
});
