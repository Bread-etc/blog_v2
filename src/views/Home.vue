<template>
    <n-tabs type="line" animated size="small" class="px-sm text-sm">
        <n-tab-pane :name="tabs[0].label" :tab="tabs[0].label" :index="tabs[0].index">
            111
        </n-tab-pane>
        <n-tab-pane :name="tabs[1].label" :tab="tabs[1].label" :index="tabs[1].index">
            222
        </n-tab-pane>
        <n-tab-pane :name="tabs[2].label" :tab="tabs[2].label" :index="tabs[2].index">
            333
        </n-tab-pane>
    </n-tabs>
</template>

<script lang="ts" setup>
import { NTabs, NTabPane } from 'naive-ui';
import { ref } from 'vue';

const tabs = ref<any[]>([
    { label: "更新", index: 0 },
    { label: "分类", index: 1 },
    { label: "标签", index: 2 }
]);
</script>

<style scoped></style>