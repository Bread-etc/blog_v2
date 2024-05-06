<script setup lang="ts">
import { NMessageProvider } from "naive-ui"
import Header from "../src/components/header.vue"
import Footer from "../src/components/footer.vue"

</script>

<template>
  <n-message-provider>
    <div id="app" class="">
      <Header />
      <div class="">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </n-message-provider>
</template>

<style scoped>

</style>
