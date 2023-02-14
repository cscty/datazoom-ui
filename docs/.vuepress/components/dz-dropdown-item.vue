<template>
    <li class="dz-dropdown-item-top" v-if="props.divided"></li>
    <li :class="props.disabled ? 'dz-dropdown-item-disabled' : 'dz-dropdown-item'">
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
const props = defineProps({
    divided: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "dz-dropdown-item",
});
</script>
<style lang="less">
@import url("../theme-chalk/Dropdown-item/index.less");
</style>