<template>
    <!-- <dz-button size="large"></dz-button>
    <dz-button></dz-button>
    <dz-button size="small"></dz-button>
    <dz-button size="default"></dz-button>
    <dz-icon></dz-icon> -->
    <!-- <dz-avatar :size="100" shape="circle" fit="cover" :src="src" /> -->
    <!-- <dz-avatar>user</dz-avatar> -->
    <!-- <dz-avatar src="http://emptty" @error="handle">user</dz-avatar> -->

    <div style="height: 500px">1111</div>
    <dz-affix :offset="80" position="top">
        <button>123165</button>
    </dz-affix>
    <div style="height: 1000px">1111</div>
    <dz-affix :offset="80" position="bottom">
        <button>123165</button>
    </dz-affix>
    <div style="height: 1000px">1111</div>
    <!-- <div class="container">
        <div class="target" target=".target">
            <dz-affix :offset="80">
                <button class="btn">固钉按钮 target offset 80px</button>
            </dz-affix>
        </div>
    </div> -->
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const src = ref(
//     "https://img1.baidu.com/it/u=3486651663,3991438881&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675789200&t=478b6d2242111ca8efb0f04aa3c89d96",
// );
// const sss = () => {
//     // console.log(111);
// };
// const aaa = () => {
//     console.log(123);
// };
</script>

<style>
.aaa {
    position: relative;
    width: 300px;
    height: 500px;
    background-color: pink;
}

.container {
    padding: 1.5em;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
    text-align: center;
}

.btn {
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
