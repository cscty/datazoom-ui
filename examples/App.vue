<template>
    <!-- <dz-button size="large"></dz-button>
    <dz-button></dz-button>
    <dz-button size="small"></dz-button>
    <dz-button size="default"></dz-button>
    <dz-icon></dz-icon> -->
    <!-- <dz-avatar :size="100" shape="circle" fit="cover" :src="src" /> -->
    <!-- <dz-avatar>user</dz-avatar> -->
    <dz-avatar src="http://emptty" @error="handle">user</dz-avatar>
    <dz-backtop visibilityHeight="200"></dz-backtop>
    <div style="height: 30000px">sd</div>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const src = ref(
//     "https://img1.baidu.com/it/u=3486651663,3991438881&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675789200&t=478b6d2242111ca8efb0f04aa3c89d96",
// );
const handle = (e: Event) => {
    console.log(1);
    console.log(e);
};
</script>
