<template>
    <div class="dz-affix" ref="container">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
    position?: "top" | "bottom";
    target?: string;
    offset?: number;
}
const props = withDefaults(defineProps<Props>(), {
    position: "top",
    target: "",
    offset: 0,
});
const container = ref<any>(null);
const Emit = defineEmits(["scroll"]);
onMounted(() => {
    const containerHeight: any = container.value.offsetTop;
    //当positon为top时组件固定在页面上方的事件函数
    const affixTop = () => {
        if (container.value.offsetTop - window.pageYOffset < props.offset) {
            container.value.style.position = "fixed";
            container.value.style.top = props.offset + "px";
        }
        if (props.offset + window.pageYOffset < containerHeight) {
            container.value.style.position = "absolute";
            container.value.style.top = "";
        }
    };
    //当positon为bottom时组件固定在页面下方的事件函数
    const affixBottom = () => {
        if (
            window.pageYOffset +
                document.documentElement.clientHeight -
                props.offset -
                container.value.clientHeight <
            containerHeight
        ) {
            container.value.style.position = "fixed";
            container.value.style.bottom = props.offset + "px";
        }
        if (
            window.pageYOffset + document.documentElement.clientHeight - props.offset >
            containerHeight + container.value.clientHeight
        ) {
            container.value.style.position = "absolute";
            container.value.style.bottom = "";
        }
    };
    //组件指定容器的事件函数
    const affixtarget = () => {
        const target: any = document.querySelector(`${props.target}`);
        if (window.pageYOffset + props.offset > target.offsetTop) {
            container.value.style.position = "fixed";
            container.value.style.top = props.offset + "px";
            container.value.style.bottom = " ";
        } else {
            container.value.style.position = "absolute";
            container.value.style.top = "";
            container.value.style.bottom = " ";
        }
        if (
            window.pageYOffset + props.offset + container.value.clientHeight >
            target.offsetTop + target.clientHeight
        ) {
            container.value.style.position = "absolute";
            container.value.style.top = "";
            container.value.style.bottom = "0";
        }
        if (
            window.pageYOffset + props.offset > target.offsetTop &&
            window.pageYOffset + props.offset + container.value.clientHeight <
                target.offsetTop + target.clientHeight
        ) {
            container.value.style.position = "fixed";
            container.value.style.top = props.offset + "px";
            container.value.style.bottom = "";
        }
    };
    //监测窗体滚动事件
    const handleScroll = () => {
        Emit("scroll");
        if (props.target != "") {
            return affixtarget();
        }
        if (props.position == "top") {
            return affixTop();
        }
        if (props.position == "bottom") {
            return affixBottom();
        }
    };
    window.addEventListener("scroll", handleScroll);
});
</script>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
export default defineComponent({
    name: "dz-affix",
});
</script>
