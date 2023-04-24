<template>
    <!-- <div class="container">
        <dz-dropdown trigger="click" hide-on-click size="small" maxHeight="500" showtimeout="0.4">
            <span>下拉菜单 List</span>
            <template v-slot:dropdown>
                <dz-dropdown-item>item1</dz-dropdown-item>
                <dz-dropdown-item disabled>item2</dz-dropdown-item>
                <dz-dropdown-item>item3</dz-dropdown-item>
                <dz-dropdown-item divided>item4</dz-dropdown-item>
                <dz-dropdown-item divided>item5</dz-dropdown-item>
            </template>
        </dz-dropdown>
    </div> -->
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

<script setup lang="ts"></script>
<style>
.container {
    padding: 20px;
    padding-bottom: 50px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    width: 800px;
    box-sizing: border-box;
}

.container div {
    float: left;

    /* margin: 0 10px; */
}
</style>
