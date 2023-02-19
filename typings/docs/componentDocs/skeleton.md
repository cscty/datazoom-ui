# Skeleton 骨架屏

在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

## 基础用法

基础的骨架效果

<div style="width: 100%;">
  <dz-skeleton :loading="true" />
  <br>
  <dz-skeleton :loading="true">
    <template #template>
      <dz-skeleton-item variant="circle" style="width:200px;height:200px;"></dz-skeleton-item>
    </template>
  </dz-skeleton>
</div>

### Attributes

| 属性名   | 说明                          | 类型      | 可选值      | 默认值 |
| -------- | ----------------------------- | --------- | ----------- | ------ |
| animated | 是否是由动画                  | `boolean` | true、false | false  |
| count    | 渲染多少个 template           | `number`  | —           | 1      |
| loading  | 是否显示加载结束后的 DOM 结构 | `boolean` | true、false | false  |
| rows     | 骨架屏段落数量                | `number`  | —           | 3      |
| throttle | 渲染延迟（以毫秒为单位）      | `number`  | —           | 0      |

### Slots

| 名称     | 说明                     |
| -------- | ------------------------ |
| default  | 正在渲染的 DOM           |
| template | 自定义渲染 skeleton 模板 |

### Skeleton Item API

| 属性名  | 说明                   | 类型     | 可选值                                            | 默认值 |
| ------- | ---------------------- | -------- | ------------------------------------------------- | ------ |
| variant | 当前渲染 skeleton 类型 | `string` | p、text、h1、button、image、circle、rect、caption | false  |
