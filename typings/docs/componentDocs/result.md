# Result 结果

用于对用户的操作结果或者异常状态做反馈

## 基础用法

<div style="display: flex;justify-content:space-around;width: 100%;">
  <dz-result icon="success" title="Success Tip" subTitle="Please follow the instructions">
    <template #extra>
      <button>back</button>
    </template>
  </dz-result>
  <dz-result icon="warning" title="warning Tip" subTitle="Please follow the instructions">
    <template #extra>
      <button>back</button>
    </template>
  </dz-result>
  <dz-result icon="error" title="error Tip" subTitle="Please follow the instructions">
    <template #extra>
      <button>back</button>
    </template>
  </dz-result>
  <dz-result icon="info" title="info Tip" subTitle="Please follow the instructions">
    <template #extra>
      <button>back</button>
    </template>
  </dz-result>
</div>

### Attributes

| 属性名   | 说明     | 类型     | 可选值                        | 默认值 |
| -------- | -------- | -------- | ----------------------------- | ------ |
| title    | 标题     | `string` | —                             | —      |
| subTitle | 二级标题 | `string` | —                             | —      |
| icon     | 图标类型 | `string` | success、wanring、error、info | info   |

### Slots

| 名称      | 说明               |
| --------- | ------------------ |
| icon      | 自定义图标         |
| title     | 自定义标题         |
| sub-title | 自定义二级标题     |
| extra     | 自定义底部额外区域 |
