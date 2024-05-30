<script setup lang="ts">
import { NMessageProvider } from "naive-ui";
import Side from "./components/side.vue";

</script>

<template>
  <n-message-provider>
    <div class="flex items-center h-screen">
      <Side class="px-8 py-2 mr-1"/>
      <div class="px-4 py-2 flex-1 bg-gray rounded-lg max-w-2xl" id="routeView">
        <router-view></router-view>
      </div>
    </div>
  </n-message-provider>
</template>

<style scoped>
#routeView {
  height: 95vh;
}
</style>
