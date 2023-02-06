<template>
    <span class="dz-avatar" :class="avatarClass" :style="sizeStyle">
        <img
            v-if="(src || srcSet) && !hasLoadError"
            :src="src"
            :shape="shape"
            :alt="alt"
            :srcset="srcSet"
            :style="fitStyle"
            @error="handleError"
        />
        <slot v-else />
    </span>
</template>

<script setup lang="ts">
import { computed, CSSProperties, ref } from "vue";
import { isNumber, isString } from "../utils/index";
// props 声明
interface Props {
    size?: number | "small" | "large" | "default";
    shape?: "circle" | "square";
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    alt?: string;
    src?: string;
    srcSet?: string;
}
// 自定义事件声明
interface Emits {
    (e: "error", evt: Event): void;
}
const props = withDefaults(defineProps<Props>(), {
    size: "default",
    shape: "circle",
    fit: "cover",
    src: "",
});
const emit = defineEmits<Emits>();

const hasLoadError = ref(false);
// avatar 整体样式
const avatarClass = computed<string[]>(() => {
    const { size, shape } = props;
    const classList: string[] = [];
    // 如果传入的 size == small 或 large，添加对应的类名
    if (size && isString(size) && (size === "small" || size === "large")) {
        classList.push(`dz-avatar-size-${size}`);
    }

    if (shape && isString(shape) && (shape === "circle" || shape === "square")) {
        classList.push(`dz-avatar-shape-${shape}`);
    }
    return classList;
});
// avatar 图片适应样式：object-fit
const fitStyle = computed<CSSProperties>(() => {
    const { fit } = props;
    return {
        objectFit: fit,
    };
});
// avatar 大小样式，即宽高。size === number 时有效
const sizeStyle = computed(() => {
    const { size } = props;
    return isNumber(size as number)
        ? {
              width: `${size}px`,
              height: `${size}px`,
          }
        : {};
});

// 图片加载失败时触发
function handleError(e: Event) {
    hasLoadError.value = true;
    emit("error", e);
}
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "dz-avatar",
});
</script>
