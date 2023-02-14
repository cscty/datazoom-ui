<template>
    <div
        :class="dropdownclass"
        ref="dropdown"
        :style="{
            '--dropdownmaxheight': props.maxHeight + 'px',
            '--dropdowntimeout': props.showtimeout + 's',
        }"
    >
        <slot></slot>
        <ul class="dz-dropdown-ul" ref="dropdownul">
            <slot name="dropdown"></slot>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface Props {
    trigger?: "hover" | "click";
    hideOnClick?: boolean;
    size?: "large" | "default" | "small";
    maxHeight?: number;
    showtimeout: number;
}
const props = withDefaults(defineProps<Props>(), {
    trigger: "hover",
    hideOnClick: false,
    size: "default",
    maxHeight: 500,
    showtimeout: 0.4,
});
const dropdown = ref<any>(null);
const dropdownul = ref<any>(null);
var state: boolean = false;
const Emit = defineEmits(["handleOpen", "handleClose"]);
const dropdownclass = computed(() => {
    return [`dz-dropdown-${props.size}`];
});
const hovershow = () => {
    const dropdownlist = dropdown.value.firstElementChild;
    dropdownlist.addEventListener("mouseover", function () {
        dropdownul.value.className = "dz-dropdown-ul-show";
        Emit("handleOpen");
    });
    dropdownlist.addEventListener("mouseout", function () {
        dropdownul.value.className = "dz-dropdown-ul";
        Emit("handleClose");
    });
    dropdownul.value.addEventListener("mouseover", function () {
        dropdownul.value.className = "dz-dropdown-ul-show";
    });
    dropdownul.value.addEventListener("mouseout", function () {
        dropdownul.value.className = "dz-dropdown-ul";
    });
};
const clickshow = () => {
    const dropdownlist = dropdown.value.firstElementChild;

    dropdownlist.addEventListener("click", function () {
        if (!state) {
            dropdownul.value.className = "dz-dropdown-ul-show";
            Emit("handleOpen");
            state = !state;
        } else {
            dropdownul.value.className = "dz-dropdown-ul";
            Emit("handleClose");
            state = !state;
        }
    });
};
const dropdownliclick = () => {
    const dropdownli = dropdownul.value.children;
    for (var i = 0; i < dropdownli.length; i++) {
        if (dropdownli[i].style.cursor != "not-allowed") {
            dropdownli[i].addEventListener("click", () => {
                dropdownul.value.className = "dz-dropdown-ul";
                state = !state;
            });
        }
    }
};
onMounted(() => {
    props.trigger == "click" ? clickshow() : hovershow();
    props.hideOnClick ? dropdownliclick() : {};
});
</script>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
    name: "dz-dropdown",
});
</script>
<style lang="less">
@import url("../theme-chalk/Dropdown/index.less");
</style>