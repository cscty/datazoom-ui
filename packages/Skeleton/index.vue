<template>
    <template v-if="uiLoading">
        <div v-bind="$attrs" class="dz-skeleton" :class="{ 'is-animated': animated }">
            <template v-for="i in count" :key="i">
                <slot v-if="loading" :key="i" name="template">
                    <dz-skeleton-item variant="p" class="is-first"></dz-skeleton-item>
                    <dz-skeleton-item
                        v-for="item in rows"
                        :key="item"
                        :class="[
                            'dz-skeleton-paragraph',
                            {
                                'is-last': item === rows && rows > 1,
                            },
                        ]"
                        variant="p"
                    />
                </slot>
            </template>
        </div>
    </template>
    <template v-else>
        <slot v-bind="$attrs" />
    </template>
</template>

<script setup lang="ts">
import { onMounted, watch, ref, toRef } from "vue";
import type { Ref } from "vue";
import DzSkeletonItem from "./skeleton-item.vue";
interface Props {
    animated?: boolean; // 是否使用动画
    count?: number; // 渲染多少个 template
    loading?: boolean; // 是否显示加载结束后的 Dom 结构
    rows?: number; // 骨架屏段落数量
    throttle?: number; // 渲染延迟
}

const props = withDefaults(defineProps<Props>(), {
    animated: false,
    count: 1,
    loading: false,
    rows: 3,
    throttle: 0,
});

const useThrottleRender = (loading: Ref<boolean>, throttle = 0) => {
    if (throttle === 0) return loading;
    const throttled = ref(false);
    let timeoutHandle = 0;

    const dispatchThrottling = () => {
        if (timeoutHandle) {
            clearTimeout(timeoutHandle);
        }
        timeoutHandle = window.setTimeout(() => {
            throttled.value = loading.value;
        }, throttle);
    };
    onMounted(dispatchThrottling);

    watch(
        () => loading.value,
        val => {
            if (val) {
                dispatchThrottling();
            } else {
                throttled.value = val;
            }
        },
    );
    return throttled;
};

const uiLoading = useThrottleRender(toRef(props, "loading"), props.throttle);
</script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "dz-skeleton",
});
</script>
