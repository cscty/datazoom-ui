<template>
    <Teleport to="body">
        <div class="dz-modal" v-show="visible">
            <div class="dz-modal-mask">
                <div
                    class="dz-modal-container"
                    :style="{
                        width: typeof props.width === 'number' ? props.width + 'px' : props.width,
                    }"
                >
                    <div class="dz-modal-title line line--b">
                        <slot name="title">{{ title }}</slot>
                        <span title="关闭" class="dz-modal-close" @click="handleCancel">✕</span>
                    </div>
                    <div class="dz-modal-content" :style="props.bodyStyle">
                        <slot>{{ content }}</slot>
                    </div>
                    <div class="dz-modal-footer line line--t">
                        <slot v-if="footer" name="footer"></slot>
                        <template v-else>
                            <Button @click="handleCancel">取消</Button>
                            <Button @click="handleOk">
                                <!-- <span class="loading" v-if="loading">❍</span> -->
                                <!-- {{ t("r.confirm") }} -->
                                确认
                            </Button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { CSSProperties, VNode } from "vue";
import Button from "./dz-button.vue";
interface Props {
    visible: boolean;
    title?: string | (() => VueNode) | VueNode;
    bodyStyle?: CSSProperties;
    width?: number | string;
    footer?: string | VNode;
    content?: string | (() => VueNode) | VueNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    okButtonProps: any;
    cancelButtonProps: any;
}
const props = withDefaults(defineProps<Props>(), {
    visible: false,
    title: "",
    width: 520,
    content: "",
});
const emit = defineEmits(["cancel", "update:visible", "ok"]);
const handleCancel = (e: MouseEvent) => {
    emit("update:visible", false);
    emit("cancel", e);
};
const handleOk = (e: MouseEvent) => {
    emit("ok", e);
};
</script>
<script lang="ts">
import { defineComponent } from "vue";
import { VueNode } from "@vue/test-utils/dist/types";
export default defineComponent({
    name: "dz-modal",
});
</script>
<style lang="less">
@import url("../theme-chalk/Modal/index.less");
</style>
