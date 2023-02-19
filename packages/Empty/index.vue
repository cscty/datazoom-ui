<template>
    <div class="dz-empty">
        <div class="dz-empty-image" :style="imageStyle">
            <img v-if="image" :src="image" />
            <slot v-else name="image">
                <ImgEmpty />
            </slot>
        </div>
        <div class="dz-empty-description">
            <slot v-if="$slots.description" name="description"></slot>
            <p v-else>{{ emptyDescription }}</p>
        </div>
        <div v-if="$slots.default" class="dz-empty-bottom">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ImgEmpty from "./img-empty.vue";
import type { CSSProperties } from "vue";
interface Props {
    image?: string; // 图片地址
    imageSize?: number; // 图片大小（宽度）
    description?: string; // 描述
}
const props = defineProps<Props>();

const imageStyle = computed<CSSProperties>(() => ({
    width: props.imageSize ? `${props.imageSize}px` : "",
}));

const emptyDescription = computed(() => props.description || "NoData");
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "dz-empty",
});
</script>
