import { mount } from "@vue/test-utils";
import Avatar from "@packages/Avatar";
describe("test dz-avatar", () => {
    it("测试传入不同的size是否更换样式", () => {
        const wrapper = mount(Avatar, {
            props: {
                size: "small",
            },
        });
        expect(wrapper.classes()).toContain("dz-avatar-size-small");
    });
    it("测试传入不同的shape是否更换样式", () => {
        const wrapper = mount(Avatar, {
            props: {
                shape: "square",
            },
        });
        expect(wrapper.classes()).toContain("dz-avatar-shape-square");
    });
});
