<template>
    <div
        class="dz-backtop"
        @click="handleClick"
        v-if="visible"
        :style="{ right: props.right + 'px', bottom: props.bottom + 'px' }"
    >
        <slot>▲</slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const visible = ref(false);
const props = defineProps({
    visibilityHeight: {
        type: Number,
        default: 200,
    },
    right: {
        type: Number,
        default: 50,
    },
    bottom: {
        type: Number,
        default: 50,
    },
});
//按钮点击事件返回窗口顶部函数
const handleClick = () => {
    let scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        var count = 50;
        const timeTop = setInterval(() => {
            count++;
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop -= count; //一次减50往上滑动
            if (scrollTop <= 0) {
                clearInterval(timeTop);
            }
        }, 10); //定时调用函数使其更顺滑
    }
};
//监测窗体滚动函数
const handleScroll = () => {
    if (window.pageYOffset > props.visibilityHeight) {
        visible.value = true;
    } else {
        visible.value = false;
    }
};
window.addEventListener("scroll", handleScroll);
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "dz-backtop",
});
</script>
