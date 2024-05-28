<template>
    <div class="flex flex-col rounded-lg relative" id="authorCard">
        <div class="flex flex-col justify-center py-4 mx-10 z-10">
            <n-image src="https://www.freeimg.cn/i/2024/05/19/664a1a0f4b164.jpg" class="rounded-xl" width="120"
                :preview-disabled="true"></n-image>
            <div class="mt-1 text-center text-lg">面包etc</div>
        </div>
        <div class="px-5 z-10 flex flex-col justify-center">
            <n-button v-for="route in routes" class="text-lg flex items-center" @click="handleNavigate(route.path)"
                quaternary ghost>
                <n-icon :component="route.icon"></n-icon>
                <div class="text-sm ml-5xl">{{ route.title }}</div>
                <n-icon :component="arrow"></n-icon>
            </n-button>
        </div>
        <n-divider />
        <div class="px-2 z-10">
            <span class="text-shadow-color-zinc text-md">最近更新</span>
        </div>
        <n-divider />
        <div class="px-2 z-10">
            <n-button v-for="item in websiteButtons" class="text-lg" circle quaternary ghost>
                <a :href="item.path" class="text-black">
                    <n-icon :component="item.icon"></n-icon>
                </a>
            </n-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Stack2 as stack, Message as connact, At as at, ChevronRight as arrow, BrandGithub as github, BrandGmail as gmail } from "@vicons/tabler";
import { NImage, NIcon, NButton, NDivider } from 'naive-ui';
import { ref } from 'vue';

const router = useRouter();
const routes = ref([
    { path: "/", title: "随笔", icon: stack },
    { path: "/contact", title: "留言", icon: connact },
    { path: "/about", title: "关于", icon: at }
]);

const handleNavigate = (path: string): void => {
    router.push(path);
};

const websiteButtons = ref([
    { path: "https://github.com/Bread-etc", title: "github", icon: github },
    { path: "mailto:mianbao.etc@gmail.com", title: "gmail", icon: gmail }
]);

</script>

<style scoped>
#authorCard {
    position: relative;
    overflow: hidden;
    /* 确保模糊背景不会溢出 */
    height: 95vh;
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