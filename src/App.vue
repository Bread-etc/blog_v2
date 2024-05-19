<script setup lang="ts">
import { NMessageProvider } from "naive-ui";
import Side from "./components/side.vue";

</script>

<template>
  <n-message-provider>
    <div class="flex justify-center items-center h-screen">
      <Side class="p-2 mr-sm"/>
      <div class="p-2 flex-1 bg-gray rounded-lg" id="routeView">
        <router-view></router-view>
      </div>
    </div>
  </n-message-provider>
</template>

<style scoped>
#routeView {
  height: 90vh;
}
</style>
