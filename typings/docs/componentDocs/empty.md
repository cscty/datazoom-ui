# Empty 空状态

空状态时的占位提示

## 基础用法

<div style="width: 100%;margin: 20px auto;border: 1px solid #eee;">
  <dz-empty description="无内容"></dz-empty>
</div>

### Attributes

| 属性名      | 说明             | 类型     | 可选值 | 默认值 |
| ----------- | ---------------- | -------- | ------ | ------ |
| image       | 图片地址         | `string` | —      | —      |
| image-size  | 图片大小（宽度） | `number` | —      | —      |
| description | 描述             | `string` | —      | NoData |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| description | 自定义描述     |
