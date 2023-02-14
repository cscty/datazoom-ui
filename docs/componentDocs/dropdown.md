# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中

## 基础用法

鼠标停留在下拉菜单上展示列表内容
通过具名插槽`dropdown`以及`dropdown-item`的`slot`来设置下列菜单列表的内容，默认情况下鼠标悬停即可显示下拉列表，参数`disabled`可禁用菜单列表元素，`divided`可显示分割线

<div class="container">
    <dz-dropdown>
        <span>下拉菜单 List</span>
         <template v-slot:dropdown>
             <dz-dropdown-item>item1</dz-dropdown-item>
             <dz-dropdown-item>item2</dz-dropdown-item>
            <dz-dropdown-item>item3</dz-dropdown-item>
            <dz-dropdown-item disabled>item4</dz-dropdown-item>
            <dz-dropdown-item divided>item5</dz-dropdown-item>
        </template>
    </dz-dropdown>
</div>

<style>
.container {
    padding: 20px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
}
</style>

<details>

```vue
<template>
    <div class="container">
        <dz-dropdown>
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## 触发对象

可以通过`trigger`设置点击展开或者悬停展开下来菜单列表  
参数可选`click`或`hover`，默认值为`hover`

<div class="container">
    <dz-dropdown trigger="click">
        <span>下拉菜单 List</span>
         <template v-slot:dropdown>
             <dz-dropdown-item>item1</dz-dropdown-item>
             <dz-dropdown-item>item2</dz-dropdown-item>
            <dz-dropdown-item>item3</dz-dropdown-item>
            <dz-dropdown-item disabled>item4</dz-dropdown-item>
            <dz-dropdown-item divided>item5</dz-dropdown-item>
        </template>
    </dz-dropdown>
</div>

<details>

```vue
<template>
    <div class="container">
        <dz-dropdown trigger="click">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## 菜单隐藏方式

可以通过 `hide-on-click` 属性来配置  
下拉菜单默认在点击菜单项后不会被隐藏，将 `hide-on-click` 属性设置为 `true` 可以在点击菜单项后将下拉菜单隐藏

<div class="container">
    <dz-dropdown hide-on-click>
        <span>下拉菜单 List</span>
         <template v-slot:dropdown>
             <dz-dropdown-item>item1</dz-dropdown-item>
             <dz-dropdown-item>item2</dz-dropdown-item>
            <dz-dropdown-item>item3</dz-dropdown-item>
            <dz-dropdown-item disabled>item4</dz-dropdown-item>
            <dz-dropdown-item divided>item5</dz-dropdown-item>
        </template>
    </dz-dropdown>
</div>

<details>

```vue
<template>
    <div class="container">
        <dz-dropdown hide-on-click>
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## 下拉时间

可通过`showtimeout`属性来控制菜单项下拉以及收回的时间，默认值为`0.4`，单位为`s`

<div class="container">
    <dz-dropdown showtimeout="1">
        <span>下拉菜单 List</span>
         <template v-slot:dropdown>
             <dz-dropdown-item>item1</dz-dropdown-item>
             <dz-dropdown-item>item2</dz-dropdown-item>
            <dz-dropdown-item>item3</dz-dropdown-item>
            <dz-dropdown-item disabled>item4</dz-dropdown-item>
            <dz-dropdown-item divided>item5</dz-dropdown-item>
        </template>
    </dz-dropdown>
</div>

<details>

```vue
<template>
    <div class="container">
        <dz-dropdown showtimeout="1">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## 菜单项打开和隐藏触发的事件

菜单项下拉时触发事件`handleOpen`，隐藏时触发事件`handleClose`

<div class="container">
    <dz-dropdown @handleOpen="handleOpen" @handleClose="handleClose">
        <span>下拉菜单 List</span>
        <template v-slot:dropdown>
            <dz-dropdown-item>item1</dz-dropdown-item>
            <dz-dropdown-item>item2</dz-dropdown-item>
            <dz-dropdown-item>item3</dz-dropdown-item>
            <dz-dropdown-item disabled>item4</dz-dropdown-item>
            <dz-dropdown-item divided>item5</dz-dropdown-item>
        </template>
    </dz-dropdown>
</div>

<script setup lang="ts">
const handleOpen = () => {
    console.log("菜单项打开");
};
const handleClose = () => {
    console.log("菜单项隐藏");
};
</script>

<details>

```vue
<template>
    <div class="container">
        <dz-dropdown @handleOpen="handleOpen" @handleClose="handleClose">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
</template>

<script setup lang="ts">
const handleOpen = () => {
    console.log("菜单项打开");
};
const handleClose = () => {
    console.log("菜单项隐藏");
};
</script>

<style>
.container {
    padding: 20px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
}
</style>
```

<summary>查看代码</summary>
</details>

## 尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸  
`size` 属性可配置尺寸大小，有三个参数可选`large` `default` `small`

<div class="containe">
    <div>
        <dz-dropdown size="large">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
        <div>
        <dz-dropdown size="default">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
        <div>
        <dz-dropdown size="small">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item disabled>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div>
</div>

<style>
.containe {
    padding: 20px;
    padding-bottom: 50px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
}

.containe div {
    float: left;
}
</style>

<details>

```vue
<template>
    <div class="container">
        <div>
            <dz-dropdown size="large">
                <span>下拉菜单 List</span>
                <template v-slot:dropdown>
                    <dz-dropdown-item>item1</dz-dropdown-item>
                    <dz-dropdown-item>item2</dz-dropdown-item>
                    <dz-dropdown-item>item3</dz-dropdown-item>
                    <dz-dropdown-item disabled>item4</dz-dropdown-item>
                    <dz-dropdown-item divided>item5</dz-dropdown-item>
                </template>
            </dz-dropdown>
        </div>
        <div>
            <dz-dropdown size="default">
                <span>下拉菜单 List</span>
                <template v-slot:dropdown>
                    <dz-dropdown-item>item1</dz-dropdown-item>
                    <dz-dropdown-item>item2</dz-dropdown-item>
                    <dz-dropdown-item>item3</dz-dropdown-item>
                    <dz-dropdown-item disabled>item4</dz-dropdown-item>
                    <dz-dropdown-item divided>item5</dz-dropdown-item>
                </template>
            </dz-dropdown>
        </div>
        <div>
            <dz-dropdown size="small">
                <span>下拉菜单 List</span>
                <template v-slot:dropdown>
                    <dz-dropdown-item>item1</dz-dropdown-item>
                    <dz-dropdown-item>item2</dz-dropdown-item>
                    <dz-dropdown-item>item3</dz-dropdown-item>
                    <dz-dropdown-item disabled>item4</dz-dropdown-item>
                    <dz-dropdown-item divided>item5</dz-dropdown-item>
                </template>
            </dz-dropdown>
        </div>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## Dropdown 属性

| 属性名        | 说明                       | 类型      | 可选值                    | 默认值    |
| ------------- | -------------------------- | --------- | ------------------------- | --------- |
| size          | 控制组件尺寸大小           | `string`  | `largr` `default` `small` | `default` |
| max-height    | 菜单下拉最高高度           | `number`  | -                         | `500`     |
| trigger       | 触发下拉菜单的行为         | `string`  | `click` `hover`           | `hover`   |
| hide-on-click | 是否在点击菜单项后隐藏菜单 | `boolean` | `true` `false`            | `false`   |
| showtimeout   | 菜单下拉隐藏过程时间控制   | `number`  | -                         | `0.4`     |

## Dropdown 插槽

| 插槽名   | 说明         | 子标签        |
| -------- | ------------ | ------------- |
| -        | 下拉菜单内容 | -             |
| dropdown | 下拉菜单列表 | dropdown-item |

## Dropdown 事件

| 事件名      | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| handleOpen  | 下拉框出现时触发 | -    |
| handleClose | 下拉框出现时隐藏 | -    |

## Dropdown-item 属性

| 属性名   | 说明           | 类型      | 可选值 | 默认值  |
| -------- | -------------- | --------- | ------ | ------- |
| disabled | 是否禁用       | `boolean` | -      | `false` |
| divided  | 是否显示分隔符 | `boolean` | -      | `false` |

## Dropdown-item 插槽

| 插槽名 | 说明                              |
| ------ | --------------------------------- |
| -      | 自定义`dropdown-item`标签中的内容 |
