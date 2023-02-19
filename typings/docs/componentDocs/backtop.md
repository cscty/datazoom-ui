# Backtop 回到顶部

能够滑动式返回页面顶部的操作按钮

## 基础用法

通过向下滑动到一定高度可查看右下角的操作按钮
<dz-backtop :right="50" :bottom="50"></dz-backtop>

<details>

```vue
<template>
    <dz-backtop :right="50" :bottom="50"></dz-backtop>
</template>
```

<summary>查看代码</summary>
</details>

## 自定义内容

显示区域被固定为 50px \* 50px 的区域，其中的内容可自定义设置

<dz-backtop :right="120" :bottom="50">up</dz-backtop>

<details>

```vue
<template>
    <dz-backtop :right="120" :bottom="50">up</dz-backtop>
</template>
```

<summary>查看代码</summary>
</details>

## API

### 属性

| 名称             | 说明                               | 类型     | 默认值 |
| ---------------- | ---------------------------------- | -------- | ------ |
| visibilityHeight | 窗口滚动高度达到此参数值后才出现   | `number` | 200    |
| right            | 控制按钮显示位置，距离页面右边距   | `number` | 50     |
| bottom           | 控制按钮显示位置，距离页面底部边距 | `number` | 50     |

### 事件

| 名称  | 说明               | 回调函数   |
| ----- | ------------------ | ---------- |
| click | 点击按钮触发的事件 | `Function` |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
