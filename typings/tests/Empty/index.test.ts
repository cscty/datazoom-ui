import Empty from "@packages/Empty";
import { mount } from "@vue/test-utils";

describe("test dz-empty", () => {
    it("has image", () => {
        const wrapper = mount(Empty, {
            props: {
                image: "https://img2.baidu.com/it/u=2421090168,324781765&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1676221200&t=33e19424dd52b8c500be2e2c8299b184",
            },
        });
        expect(wrapper.find("img").attributes().src).toBeTruthy();
    });
    // it("has desc", () => {
    //     const wrapper = mount(Empty, {
    //         props: {
    //             description: "empty",
    //         },
    //     });
    //     expect(wrapper.find("dz-empty-description").text()).toEqual("empty");
    // });
});
