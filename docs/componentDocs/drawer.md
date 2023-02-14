# Drawer 抽屉

Drawer 组屏幕边缘滑出的浮层面板。

## 基础用法

呼出一个临时的侧边栏, 可以从多个方向呼出

<details>

```vue
<template>
    <dz-button type="primary" @click="showDrawer">Open</dz-button>
    <dz-drawer
        v-model:visible="visible"
        class="custom-class"
        style="color: red"
        title="Basic Drawer"
        placement="right"
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
    </dz-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const visible = ref<boolean>(false);
        const showDrawer = () => {
            visible.value = true;
        };

        return {
            visible,
            afterVisibleChange,
            showDrawer,
        };
    },
});
</script>
```

<summary style="margin: 20px;">查看代码</summary>
</details>

### Attributes

| 参数             | 说明                                       | 类型                               | 可选值             | 默认值  |
| ---------------- | ------------------------------------------ | ---------------------------------- | ------------------ | ------- |
| visible(v-model) | 对话框是否可见                             | boolean                            | `true` / `false` / | 无      |
| title            | 标题                                       | string ｜ slot                     | —                  | 无      |
| bodyStyle        | Drawer body 样式址                         | object                             | —                  | {}      |
| width            | 宽度                                       | string ｜ number                   | —                  | 520     |
| height           | 高度, 在 placement 为 top 或 bottom 时使用 | string ｜ number                   | —                  | 378     |
| placement        | 抽屉的方向                                 | 'top'｜ 'right'｜ 'bottom'｜'left' | —                  | 'right' |
| maskClosable     | 点击蒙层是否允许关闭                       | boolean                            | —                  | true    |
| extra            | 抽屉右上角的操作区域                       | VNode ｜ slot                      | —                  | —       |

### Events

| 名称     | 说明         | 类型     |
| -------- | ------------ | -------- |
| onOK     | 点击确定回调 | function |
| onCancel | 点击取消回调 | function |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 抽屉内容 |
