import Badge from "@packages/Badge";
import { mount } from "@vue/test-utils";
import { nextTick, ref } from "vue";
const AXIOM = "Rem is the best girl";
describe("test dz-badge", () => {
    it("has value", () => {
        const wrapper = mount(Badge, {
            props: {
                value: 80,
            },
        });
        expect(wrapper.find(".dz-badge-content").text()).toEqual("80");
    });
    it("has fixed", () => {
        const wrapper = mount(Badge, {
            slots: {
                default: () => AXIOM,
            },
        });
        expect(wrapper.find(".dz-badge-content.is-fixed").exists()).toBe(true);
        expect(wrapper.find(".dz-badge").text()).toBe(AXIOM);
    });
    it("has dot", () => {
        const wrapper = mount(Badge, {
            props: {
                isDot: true,
            },
            slots: {
                default: () => AXIOM,
            },
        });
        expect(wrapper.find(".dz-badge-content.is-dot").exists()).toBe(true);
        // expect(wrapper.find(".dz-badge-content.dz-badge-content-danger").text()).toBe(true);
    });
    it("has dot with type", () => {
        const wrapper = mount(Badge, {
            props: {
                isDot: true,
                type: "success",
            },
            slots: {
                default: () => AXIOM,
            },
        });
        expect(wrapper.find(".dz-badge-content.is-dot").exists()).toBe(true);
        // expect(wrapper.find(".dz-badge-content.dz-badge-content-success").text()).toBe(true);
    });
    it("has max", async () => {
        const badgeValue = ref(200);
        const wrapper = mount(Badge, {
            props: {
                value: badgeValue.value,
                max: 100,
            },
        });
        expect(wrapper.find(".dz-badge-content").text()).toEqual("100+");
        // badgeValue.value = 80;
        // await nextTick();
        // expect(wrapper.find(".dz-badge-content").text()).toEqual("80");
    });
});
