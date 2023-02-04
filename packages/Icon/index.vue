<template>
    <button :class="['dz-button', 'dz-button-' + props.size, 'dz-button-' + props.type]">
        icon
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
    name: "dz-icon",
});
</script>
