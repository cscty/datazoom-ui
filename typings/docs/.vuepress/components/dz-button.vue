<template>
    <button :class="['dz-button', 'dz-button-' + props.size, 'dz-button-' + props.type]">
        欢迎你们来我村庄然日卡玩
    </button>
</template>

<script setup lang="ts">
interface Props {
    size?: "large" | "default" | "small";
    type?: "primary" | "success" | "warning" | "danger" | "info" | "delete";
}
const props = withDefaults(defineProps<Props>(), {
    size: "default",
    type: "primary",
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "dz-button",
});
</script>
<style lang="less">
@import url("../theme-chalk/Button/index.less");
</style>