<template>
    <div class="dz-result">
        <div class="dz-result-icon">
            <slot name="icon">
                <ResultIcon :type="selectType" />
            </slot>
        </div>
        <div class="dz-result-title" v-if="title || $slots.title">
            <slot name="title">
                <p>{{ title }}</p>
            </slot>
        </div>
        <div class="dz-result-subtitle" v-if="subTitle || $slots['sub-title']">
            <slot name="sub-title">
                <p>{{ subTitle }}</p>
            </slot>
        </div>
        <div class="dz-result-extra" v-if="$slots.extra">
            <slot name="extra" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ResultIcon from "./resultIcon.vue";
import { computed } from "vue";
interface Props {
    title?: string;
    subTitle?: string;
    icon?: string;
}

// icon 映射
const IconMap = {
    success: "success",
    warning: "warning",
    error: "error",
    info: "info",
};

const props = withDefaults(defineProps<Props>(), {
    icon: "info",
});

const selectType = computed<string>(() => {
    const icon = props.icon;
    return IconMap[icon] ? IconMap[icon] : "info";
});
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "dz-result",
});
</script>
