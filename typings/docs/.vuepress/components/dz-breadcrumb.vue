<template>
    <div :class="breadcrumbclass">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
interface Props {
    separator?: "/" | ">" | "|";
}
const props = withDefaults(defineProps<Props>(), {
    separator: "/",
});

const sign = props.separator == "/" ? "Inclined" : props.separator == ">" ? "great" : "vertical";

const breadcrumbclass = computed<string[]>(() => {
    return ["dz-breadcrumb", `dz-breadcrumb-${sign}`];
});
</script>
<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
    name: "dz-breadcrumb",
});
</script>
<style lang="less">
@import url("../theme-chalk/Breadcrumb/index.less");
</style>