# Avatar 头像

Avatar 组件用来表示人物或对象，支持图片或者文字作为 Avatar。

## 基础用法

使用 `shape` 和 `size` 属性设置 Avatar 的形状和大小。

<div class="example">
<div class="example-demo">
<div class="col">
<div class="title">circle</div>
<div class="demo-basic--circle" style="display: flex;">
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="default"></dz-avatar>
</div>
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="small"></dz-avatar>
</div>
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="large"></dz-avatar>
</div>
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" :size="50"></dz-avatar>
</div>
</div>
</div>
<div class="col">
<div class="title">square</div>
<div class="demo-basic--circle" style="display: flex;">
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="default" shape="square"></dz-avatar>
</div>
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="small" shape="square"></dz-avatar>
</div>
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" size="large" shape="square"></dz-avatar>
</div>
<div class="block">
<dz-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" :size="50" shape="square"></dz-avatar>
</div>
</div>
</div>
</div></div>

<details>

<style>
  .example {
    width:800px;
    height: 140px;
    padding: 1.5em;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    text-align: center;
  }
  .example-demo {
    display: flex;
    flex-wrap: wrap;
  }
  .col {
    box-sizing: border-box;
    flex: 0 0 50%;
  }
  .col:not(:last-child) {
    border-right: 1px solid #dcdfe6;
  }
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #909399;
  }
  .demo-basic--circle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .block {
    display: block;
    flex: 1;
  }
  .block:not(:last-child) {
    border-right: 1px solid #dcdfe6;
  }
</style>

```vue
<template>
    <div class="example">
        <div class="example-demo">
            <div class="col">
                <div class="title">circle</div>
                <div class="demo-basic--circle">
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            size="default"
                        ></dz-avatar>
                    </div>
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            size="small"
                        ></dz-avatar>
                    </div>
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            size="large"
                        ></dz-avatar>
                    </div>
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            :size="50"
                        ></dz-avatar>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="title">square</div>
                <div class="demo-basic--circle">
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            size="default"
                            shape="square"
                        ></dz-avatar>
                    </div>
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            size="small"
                            shape="square"
                        ></dz-avatar>
                    </div>
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            size="large"
                            shape="square"
                        ></dz-avatar>
                    </div>
                    <div class="block">
                        <dz-avatar
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            :size="50"
                            shape="square"
                        ></dz-avatar>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .example {
            padding: 1.5em;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            width: 800px;
            height: 140px;
            box-sizing: border-box;
            text-align: center;
        }

        .example-demo {
            display: flex;
            flex-wrap: wrap;
        }

        .col {
            box-sizing: border-box;
            flex: 0 0 50%;
        }

        .col:not(:last-child) {
            border-right: 1px solid #dcdfe6;
        }

        .title {
            margin-bottom: 10px;
            font-size: 14px;
            color: #909399;
        }

        .demo-basic-circle {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .block {
            display: block;
            flex: 1;
        }

        .block:not(:last-child) {
            border-right: 1px solid #dcdfe6;
        }
    </style>
</template>
```

<summary style="margin: 20px;">查看代码</summary>

</details>

### Attributes

| 参数  | 说明                                     | 类型            | 可选值                                              | 默认值  |
| ----- | ---------------------------------------- | --------------- | --------------------------------------------------- | ------- |
| size  | 尺寸                                     | string / number | `large` / `default` / `small`                       | default |
| shape | 形状                                     | string          | `circle` / `square`                                 | circle  |
| src   | Avatar 图片资源地址                      | string          | —                                                   | —       |
| alt   | Avatar 图片原生 `alt` 属性               | string          | —                                                   | —       |
| fit   | 当展示类型为图片时，设置图片如何适应容器 | string          | `cover` / `fit` / `contain` / `none` / `scale-down` | cover   |

### Events

| 名称  | 说明               | 类型     |
| ----- | ------------------ | -------- |
| error | 图片加载失败时触发 | function |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义头像展示内容 |
