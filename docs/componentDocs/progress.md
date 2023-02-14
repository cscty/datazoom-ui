# Progress 对话框

Progress 告知用户当前状态和预期。

## 基础用法

Progress 组件设置 percentage 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 0-100 的范围内。 你可以通过设置 format 来自定义文字显示的格式。

<details>

```vue
<template>
    <div class="demo-progress">
        <dz-progress :percentage="50" />
        <dz-progress :percentage="100" :format="format" />
        <dz-progress :percentage="100" status="success" />
        <dz-progress :percentage="100" status="warning" />
        <dz-progress :percentage="50" status="exception" />
    </div>
</template>

<script lang="ts" setup>
const format = percentage => (percentage === 100 ? "Full" : `${percentage}%`);
</script>

<style scoped>
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
}
</style>
```

<summary style="margin: 20px;">查看代码</summary>
</details>

### Attributes

| 参数        | 说明                                                        | 类型     | 可选值                    | 默认值 |
| ----------- | ----------------------------------------------------------- | -------- | ------------------------- | ------ |
| percent     | 百分比                                                      | number   | (0-100)                   | 无     |
| strokeColor | 进度条的色彩                                                | string   | —                         | ''     |
| status      | 进度条当前状态                                              | string   | success/exception/warning | 无     |
| type        | 进度条类型                                                  | string   | line/circle/dashboard     | line   |
| strokeWidth | 进度条的宽度                                                | number   | —                         | 6      |
| width       | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用 | number   | —                         | 126    |
| format      | 指定进度条文字内容                                          | function | —                         | 无     |

### Events

| 名称     | 说明         | 类型     |
| -------- | ------------ | -------- |
| onOK     | 点击确定回调 | function |
| onCancel | 点击取消回调 | function |

### Slots

| 名称    | 说明                           |
| ------- | ------------------------------ |
| default | 自定义内容，参数为 { percent } |
