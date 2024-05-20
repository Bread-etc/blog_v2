<template>
    <div class="flex flex-col rounded-lg relative" id="authorCard">
        <div class="flex justify-center p-5 z-10">
            <n-avatar size="large" src="https://www.freeimg.cn/i/2024/05/19/664a1a0f4b164.jpg"></n-avatar>
            <div class="ml-sm text-lg font-bold font-mono">Bread_etc</div>
        </div>
        <div class="flex justify-between px-5 py-2 z-10">
            <div v-for="route in routes" class="bg-white rounded-lg p-2">{{ route.title }}</div>
        </div>
        <span class="tabler:stack-2"></span>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Stack2 } from "@vicons/tabler"''
import { NAvatar } from 'naive-ui';
import { ref } from 'vue';

const router = useRouter();
const routes = ref([
    { path: "/", title: "随笔", icon: "tabler:stack-2" },
    { path: "/contact", title: "留言", icon: "" },
    { path: "/about", title: "关于", icon: "" }
])

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