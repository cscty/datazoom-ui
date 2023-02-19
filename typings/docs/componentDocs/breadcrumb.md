# Breadcrumb 面包屑

显示当前页面的路径，并且可以返回之前的页面

## 基础用法

在`dz-breadcrumb`中使用`dz-breadcrumb-item`标签来表示从首页开始的每一个页面，每个`dz-breadcrumb-item`标签内可自定义内容，每两个`dz-breadcrumb-item`标签中间会有一个分隔符

<div class="container">
    <dz-breadcrumb>
        <dz-breadcrumb-item>Homepage</dz-breadcrumb-item>
        <dz-breadcrumb-item>Information management</dz-breadcrumb-item>
        <dz-breadcrumb-item>Information list</dz-breadcrumb-item>
        <dz-breadcrumb-item>Member list</dz-breadcrumb-item>
    </dz-breadcrumb>
</div>

<style>
.container {
    padding: 8px;
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
        <dz-breadcrumb>
            <dz-breadcrumb-item>Homepage</dz-breadcrumb-item>
            <dz-breadcrumb-item>Information management</dz-breadcrumb-item>
            <dz-breadcrumb-item>Information list</dz-breadcrumb-item>
            <dz-breadcrumb-item>Member list</dz-breadcrumb-item>
        </dz-breadcrumb>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## 自定义分隔符

通过`dz-breadcrumb`的`separator`属性可控制之间的分隔符类型，其参数有三个，`/`，`>`，`|`，默认值为`/`

<div class="container">
    <dz-breadcrumb separator=">">
        <dz-breadcrumb-item>Homepage</dz-breadcrumb-item>
        <dz-breadcrumb-item>Information management</dz-breadcrumb-item>
        <dz-breadcrumb-item>Information list</dz-breadcrumb-item>
        <dz-breadcrumb-item>Member list</dz-breadcrumb-item>
    </dz-breadcrumb>
</div>

<details>

```vue
<template>
    <div class="container">
        <dz-breadcrumb separator=">">
            <dz-breadcrumb-item>Homepage</dz-breadcrumb-item>
            <dz-breadcrumb-item>Information management</dz-breadcrumb-item>
            <dz-breadcrumb-item>Information list</dz-breadcrumb-item>
            <dz-breadcrumb-item>Member list</dz-breadcrumb-item>
        </dz-breadcrumb>
    </div>
</template>
```

<summary>查看代码</summary>
</details>

## Breadcrumb API

### Breadcrumb 属性

| 属性名    | 说明   | 类型     | 可取值       | 默认值 |
| --------- | ------ | -------- | ------------ | ------ |
| separator | 分隔符 | `string` | `/` `>` `\|` | `/`    |

### Breadcrumb 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## BreadcrumbItem API

### BreadcrumbItem 属性

| 属性名 | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| to     | 路由跳转目标 | `string` | -      |

### BreadcrumbItem 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
