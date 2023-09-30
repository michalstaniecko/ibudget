<script setup lang="ts">

import Navbar from "@/components/Navbar/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <base-container>
      <router-view></router-view>
    </base-container>
  </div>
</template>

<style scoped>

</style>
