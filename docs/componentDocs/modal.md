# Modal 对话框

Modal 组件在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Modal 弹出一个对话框，适合需要定制性更大的场景。

<details>

```vue
<template>
    <button @click="visible = true">打开modal</button>
    <dz-modal v-modal:visible="visible" title="Basic Modal" @ok="handleOk">
        <p>content</p>
    </dz-modal>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const visible = ref<boolean>(false);
        const showModal = function () {
            visible.value = true;
        };
        const handleOk = function (e: MouseEvent) {
            visible.value = false;
        };
        return {
            visible,
            showModal,
            handleOk,
        };
    },
});
</script>
```

<summary style="margin: 20px;">查看代码</summary>
</details>

### Attributes

| 参数             | 说明              | 类型             | 可选值             | 默认值       |
| ---------------- | ----------------- | ---------------- | ------------------ | ------------ |
| visible(v-model) | 对话框是否可见    | boolean          | `true` / `false` / | 无           |
| title            | 标题              | string ｜ slot   | —                  | 无           |
| bodyStyle        | Modal body 样式址 | object           | —                  | {}           |
| width            | 宽度              | string ｜ number | —                  | 520          |
| footer           | 底部内容          | string ｜ slot   | —                  | 确定取消按钮 |
| content          | 内容              | string ｜ VNode  | —                  | 无           |

### Events

| 名称     | 说明         | 类型     |
| -------- | ------------ | -------- |
| onOK     | 点击确定回调 | function |
| onCancel | 点击取消回调 | function |

### Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 对话框内容 |
| title   | 标题内容   |
| footer  | 底部内容   |
