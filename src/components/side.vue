<template>
    <div class="flex flex-col rounded-lg relative" id="authorCard">
        <div class="flex justify-center py-4 px-10 z-10">
            <n-avatar size="large" src="https://www.freeimg.cn/i/2024/05/19/664a1a0f4b164.jpg"></n-avatar>
            <div class="ml-sm text-lg" style="font-weight: 600;">面包etc</div>
        </div>
        <div class="flex justify-center px-10 z-10">
            <n-button-group>
                <n-button v-for="route in routes"
                    class=" bg-light rounded-lg p-2 flex flex-col justify-center items-center text-lg"
                    @click="handleNavigate(route.path)">
                    <n-icon :component="route.icon"></n-icon>
                </n-button>
            </n-button-group>
        </div>
        <span class="tabler:stack-2"></span>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Stack2 as stack, Message as connact, At as at } from "@vicons/tabler";
import { NAvatar, NIcon, NButton, NButtonGroup } from 'naive-ui';
import { ref } from 'vue';

const router = useRouter();
const routes = ref([
    { path: "/", title: "随笔", icon: stack, active: true },
    { path: "/contact", title: "留言", icon: connact },
    { path: "/about", title: "关于", icon: at }
])

const handleNavigate = (path: string): void => {
    router.push(path);
}

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