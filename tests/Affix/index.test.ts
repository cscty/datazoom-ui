import { mount } from "@vue/test-utils";
import Backtop from "@packages/Backtop/index.vue";
describe("测试dz-backtop", () => {
    it("测试组件间传值是否正常", () => {
        const wrapper = mount(Backtop, {
            props: {
                right: 500,
                bottom: 300,
            },
        });
        expect(wrapper.vm.right).toBe(500);
        expect(wrapper.vm.bottom).toBe(300);
    });
});
