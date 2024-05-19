<template>
    <div class="flex flex-col rounded-lg relative" id="authorCard">
        <div class="flex p-sm z-10">
            <a href="#logo">
                <img src="@images/bread.webp" alt="image/nav" class="w-24px h-24px" />
            </a>
            <div>Bread_etc Blog</div>
        </div>
        <div class="flex p-sm z-10">
            站内搜索
        </div>
        <div v-for="route in routes" class="z-10">{{ route.title }}</div>
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

<style scoped>
#authorCard {
    position: relative;
    overflow: hidden;
    /* 确保模糊背景不会溢出 */
    height: 90vh;
}

#authorCard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/bg-authorCard.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    /* 调整模糊效果的程度 */
    z-index: 1;
    /* 确保背景层在文字后面 */
}

#authorCard>* {
    position: relative;
    z-index: 10;
    /* 确保文字和其他内容在模糊背景层上面 */
}
</style>