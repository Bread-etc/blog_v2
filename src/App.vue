<script setup lang="ts">
import { NMessageProvider } from "naive-ui"
import Header from "./components/side.vue"

</script>

<template>
  <n-message-provider>
    <div id="app" class="flex justify-center">
      <Header />
      <div class="flex-1 text-amber">
        <router-view></router-view>
      </div>
    </div>
  </n-message-provider>
</template>

<style scoped>

</style>
