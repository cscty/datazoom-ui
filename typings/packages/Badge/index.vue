<template>
    <div class="dz-badge">
        <slot />
        <sup
            v-show="!hidden && (content || isDot)"
            v-text="content"
            :class="[
                'dz-badge-content',
                { 'is-fixed': $slots.default },
                shouldHasDot,
                ...typeStyle,
            ]"
        />
    </div>
</template>

<script setup lang="ts">
import { isNumber } from "@packages/utils";
import { computed } from "vue";
interface Props {
    value?: number | string; // 显示的值
    max?: number; // 角标最大值，超过则显示 max+
    isDot?: boolean; // 是否显示小圆点
    hidden?: boolean; // 是否隐藏 badge
    type?: "primary" | "success" | "warning" | "danger" | "info"; // 角标类型
}

const props = withDefaults(defineProps<Props>(), {
    value: "",
    max: 99,
    isDot: false,
    hidden: false,
    type: "danger",
});

// 角标要显示的内容
const content = computed<string | number>(() => {
    if (props.isDot) return "";
    if (isNumber(props.value) && isNumber(props.max)) {
        return props.value > props.max ? `${props.max}+` : `${props.value}`;
    }
    return props.value;
});

const shouldHasDot = computed(() => (props.isDot ? "is-dot" : ""));

const typeStyle = computed(() => {
    const style: string[] = [];
    if (!props.type) return "";
    style.push(`dz-badge-content-${props.type}`);
    return style;
});

// 暴露给外部的值
defineExpose({
    content,
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "dz-badge",
});
</script>
