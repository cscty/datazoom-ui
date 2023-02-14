<template>
    <Teleport to="body">
        <div :class="`dz-drawer${visible ? '-open' : ''}`">
            <Transition name="fade">
                <div
                    class="dz-drawer-mask"
                    @click="maskClosable && $emit('update:visible', false)"
                ></div>
            </Transition>
            <Transition>
                <div
                    :class="['dz-drawer-content', 'dz-drawer-content-' + props.placement]"
                    :style="offsetStyle"
                >
                    <div class="dz-drawer-header">
                        <div class="dz-drawer-header-title line line--b">
                            <span title="关闭" class="dz-drawer-header-close" @click="handleCancel">
                                ✕
                            </span>
                            <slot name="title">{{ title }}</slot>
                        </div>
                        <div class="dz-drawer-header-extra">
                            <slot name="extra">{{ extra }}</slot>
                        </div>
                    </div>
                    <div class="dz-drawer-body">
                        <slot></slot>
                    </div>
                </div>
            </Transition>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
interface Props {
    placement?: "right" | "left" | "top" | "bottom";
    visible: boolean;
    title?: string;
    width?: number | string;
    height?: number | string;
    extra?: VNode;
    maskClosable?: boolean;
    bodyStyle?: CSSProperties;
}
const props = withDefaults(defineProps<Props>(), {
    width: 378,
    height: 738,
    visible: false,
    title: "",
    placement: "right",
    maskClosable: true,
});
const emit = defineEmits(["cancel", "update:visible", "ok"]);
const offsetStyle = computed(() => {
    const { visible, placement, width, height } = props;
    console.log("进来了嘛1", typeof props.width);

    // if (!visible) {
    //     return {};
    // }
    const val: CSSProperties = {};
    if (placement === "left" || placement === "right") {
        val.width = typeof width === "undefined" ? "378px" : width;
        val.width = typeof val.width === "string" ? val.width : `${val.width}px`;
        // !visible && (val.transform = `translateX(${placement === "left" ? "-100%" : "100%"})`);
        if (visible) {
            val.transform = "translateX(0)";
        } else {
            console.log("进来了嘛", typeof props.width);

            val.transform = `translateX(${placement === "left" ? -378 : width}px)`;
        }
    } else {
        // const defaultHeight = size === "large" ? 736 : 378;
        val.height = typeof height === "undefined" ? "378px" : height;
        val.height = typeof val.height === "string" ? val.height : `${val.height}px`;
        // if (visible) {

        // }
    }
    return val;
});
const handleCancel = (e: MouseEvent) => {
    emit("update:visible", false);
    emit("cancel", e);
};
</script>
<script lang="ts">
import { computed, CSSProperties, defineComponent, VNode } from "vue";
export default defineComponent({
    name: "dz-drawer",
});
</script>
<style lang="less">
@import url("../theme-chalk/Modal/index.less");
</style>