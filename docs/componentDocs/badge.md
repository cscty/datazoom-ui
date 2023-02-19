# Badge 徽章

按钮和图标上的数字或状态标记

## 基础用法

可以用来展示新消息的数量。

数量值可以接受 Number 或 String。

<dz-badge :value="20"><button>comments</button></dz-badge>
<dz-badge :value="20" type="primary"><button>comments</button></dz-badge>

### Attributes

| 属性名 | 说明                                                       | 类型                 | 可选值                                  | 默认值 |
| ------ | ---------------------------------------------------------- | -------------------- | --------------------------------------- | ------ |
| value  | 显示值                                                     | `string` \/ `number` | —                                       | ""     |
| max    | 最大值，超过最大值会显示 `max+`，只有当 value 是数字时有效 | `number`             | —                                       | 99     |
| isDot  | 是否显示小圆点                                             | `boolean`            | true、false                             | false  |
| hidden | 是否隐藏 Badge                                             | `boolean`            | true、false                             | false  |
| type   | badge 类型                                                 | `string`             | danger、success、primary、info、warning | danger |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
