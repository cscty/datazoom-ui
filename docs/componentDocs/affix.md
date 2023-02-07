# Affix 固钉

将页面元素固定在某个区域内

## 基础语法

固钉默认会固定在页面顶部。
可以通过`offset`属性来控制固钉的偏移位置，默认值为 0

<div class="container">
    <dz-affix :offset="80">
        <button class="btn">固钉按钮 offsetTop 80px</button>
    </dz-affix>
</div>

<style>
.container {
    padding: 1.5em;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    height:85px;
    text-align: center;
    box-sizing: border-box;
}
.btn {
    padding: 5px;
    border: none;
    border-radius: 5px;
    height: 35px;
    font-size: 14px;
    color: #fff;
    background-color: #409eff;
    cursor: pointer;
}
</style>

<details>

```vue
<template>
    <dz-affix :offset="80">
        <button class="btn">固钉按钮 offsetTop 80px</button>
    </dz-affix>
</template>
```

<summary>查看代码</summary>
</details>

## 指定容器

通过设置`target`属性，使得固钉在页面滚动过程中始终保持在容器内  
请注意不能出现滚动条

<div class="tar-container">
    <div class="target">
        <dz-affix :offset="80" target=".target">
            <button class="targetbtn">固钉按钮 target offset 80px</button>
        </dz-affix>
    </div>
</div>

<style>
.tar-container {
    padding: 1.5em;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
    text-align: center;
}

.targetbtn {
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-left: 251px;
    height: 35px;
    font-size: 14px;
    color: #fff;
    background-color: #449bf1;
    cursor: pointer;
}

.target {
    position: relative;
    border-radius: 5px;
    margin: 0 auto;
    width: 750px;
    height: 300px;
    background-color: #bbc4ce;
}
</style>

<details>

```vue
<template>
    <div class="tar-container">
        <div class="target">
            <dz-affix :offset="80" target=".target">
                <button class="targetbtn">固钉按钮 target offset 80px</button>
            </dz-affix>
        </div>
    </div>
</template>
<style>
.tar-container {
    padding: 1.5em;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
    text-align: center;
}
.targetbtn {
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-left: 251px;
    height: 35px;
    font-size: 14px;
    color: #fff;
    background-color: #449bf1;
    cursor: pointer;
}
.target {
    position: relative;
    border-radius: 5px;
    margin: 0 auto;
    width: 750px;
    height: 300px;
    background-color: #bbc4ce;
}
</style>
```

<summary>查看代码</summary>
</details>

## 选定位置

Affix 组件可以通过`position`属性来选定固定的位置，默认值为`top`
`position`可以有两个参数可选，`top`和`bottom`

<div class="container">
    <dz-affix :offset="80" position="bottom">
        <button class="btn">固钉按钮 offsetbottom 80px</button>
    </dz-affix>
</div>

<details>

```vue
<template>
    <dz-affix :offset="80" position="bottom">
        <button class="btn">固钉按钮 offsetbottom 80px</button>
    </dz-affix>
</template>
```

<summary>查看代码</summary>
</details>

## Affix API

### Affix 属性

| 名称       | 说明                       | 类型     | 默认值 | 可选值           | 必填 |
| ---------- | -------------------------- | -------- | ------ | ---------------- | ---- |
| `offset`   | 偏移距离                   | `number` | `0`    | `top` / `bottom` | 否   |
| `position` | 偏移位置                   | `number` | `top`  | -                | 否   |
| `target`   | 指定容器（CSS 类名选择器） | `string` | -      | -                | 否   |

### Affix 事件

| 名称     | 说明             | 类型       |
| -------- | ---------------- | ---------- |
| `scroll` | 滚动时触发的事件 | `Function` |

### Affix 插槽

| 插槽名    | 说明           |
| --------- | -------------- |
| `default` | 自定义默认内容 |
