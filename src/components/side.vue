<template>
    <div class="flex sticky top-0">
        <a href="#logo">
            <img src="@images/bread.webp" alt="image/nav" class="w-24px h-24px" />
        </a>
        <div>Bread_etc Blog</div>
        <div v-for="route in routes"></div>
    </div>
</template>

<script lang="ts" setup>
// import { useRouter } from 'vue-router';
import { ref } from 'vue'

// const router = useRouter();
const routes = ref([
    { path: "/", title: "首页" },
    { path: "/essay", title: "随笔" },
    { path: "/contact", title: "留言" },
    { path: "/about", title: "关于" }
])

// 路由跳转

</script>

<style module></style>