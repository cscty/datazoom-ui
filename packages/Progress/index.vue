<template>
    <div :class="['dz-progress', `dz-progress--${type}`, `${status}`]">
        <div v-if="type === 'line'" class="dz-progress-line">
            <div
                class="dz-progress-outer"
                :style="{
                    height: typeof strokeWidth === 'string' ? strokeWidth : `${strokeWidth}px`,
                }"
            >
                <div class="dz-progress-inner" :style="lineStyle"></div>
            </div>
        </div>
        <div v-else class="dz-progress-circle" :style="{ height: `${width}`, width: `${width}` }">
            <svg viewBox="0 0 100 100">
                <path
                    class="dz-progress-circle-track"
                    :d="path"
                    stroke="#e5e9f2"
                    :stroke-width="relativeWidth"
                    fill="none"
                />
                <path
                    class="dz-progress-circle-path"
                    :d="path"
                    :stroke="strokeColor"
                    fill="none"
                    :opacity="percent ? 1 : 0"
                    stroke-linecap="round"
                    :stroke-width="relativeWidth"
                    :style="circlePathStyle"
                />
            </svg>
        </div>
        <div v-if="showText || $slots.default" class="dz-progress-text">
            <slot>{{ content }}</slot>
        </div>
    </div>

    <slot></slot>
</template>
<script setup lang="ts">
interface Props {
    percent: number;
    strokeColor?: string;
    status?: "" | "success" | "exception" | "warning";
    type?: "line" | "circle" | "dashboard";
    strokeLinecap?: string;
    trailColor?: string;
    // format:
    strokeWidth: number;
    size: string;
    width?: number;
    // success: { percent: number; strokeColor: string };
    duration: number;
    format: (percent: number) => string;
    showText: boolean;
}
enum STATUS_COLOR {
    "success" = "#13ce66",
    "exception" = "#ff4949",
    "warning" = "#e6a23c",
    "default" = "#20a0ff",
}
const props = withDefaults(defineProps<Props>(), {
    percent: 0,
    duration: 3,
    strokeWidth: 6,
    type: "line",
    width: 132,
    showText: true,
    format: (percent: number) => `${percent}%`,
});
const strokeColor = computed(() => STATUS_COLOR[strokeColor.value || "default"]);
const lineStyle = computed<CSSProperties>(() => {
    // const { percent, strokeWidth, strokeLinecap, size } = props;
    return {
        width: `${props.percent}%`,
        borderRadius: props.strokeLinecap === "square" ? 0 : "",
        backgroundColor: props.strokeColor,
        // ...(backgroundProps.value as any),
    };
});
const relativeWidth = computed(() => ((props.strokeWidth / props.width) * 100).toFixed(1));
const radius = computed(() =>
    ["circle", "dashboard"].includes(props.type)
        ? Number.parseInt(`${50 - Number.parseFloat(relativeWidth.value) / 2}`)
        : 0,
);
const content = computed(() => props.format(props.percent));
const path = computed(() => {
    const { type } = props;
    const isD = type === "dashboard";
    return `
    M 50 50
    m 0 ${isD ? "" : "-"}${radius.value}
    a ${radius.value} ${radius.value} 0 1 1 0 ${isD ? "-" : ""}${radius.value * 2}
    a ${radius.value} ${radius.value} 0 1 1 0 ${isD ? "" : "-"}${radius.value * 2}
    `;
});
const perimeter = computed(() => 2 * Math.PI * radius.value);
const rate = computed(() => (props.type === "dashboard" ? 0.75 : 1));
const strokeDashoffset = computed(() => {
    const offset = (-1 * perimeter.value * (1 - rate.value)) / 2;
    return `${offset}px`;
});
const circlePathStyle = computed<CSSProperties>(() => ({
    strokeDasharray: `${perimeter.value * rate.value * (props.percent / 100)}px,${perimeter.value}`,
    strokeDashoffset: strokeDashoffset.value,
    transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s",
}));
</script>
<script lang="ts">
import { computed, CSSProperties, defineComponent } from "vue";
export default defineComponent({
    name: "dz-progress",
});
</script>
