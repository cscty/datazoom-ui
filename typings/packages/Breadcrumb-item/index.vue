<template>
    <div class="dz-breadcrumb-item">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
// const router = useRoute();
// const props = defineProps({
//     to: {
//         type: String,
//     },
// });
// if (props.to) {
//     router.push(props.to);
// }
</script>
<script lang="ts">
import { defineComponent } from "vue";
// import { useRoute } from "vue-router";

export default defineComponent({
    name: "dz-breadcrumb-item",
});
</script>
