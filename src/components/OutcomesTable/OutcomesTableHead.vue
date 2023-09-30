<script setup lang="ts">
const props = defineProps<{
  head: {
    label: string,
    key: string
  }[]
}>()
</script>

<template>
  <thead>
  <tr>
    <th>
      #
    </th>
    <th v-for="{label, key} in head" :key="key">
      {{ label }}
    </th>
    <th>
      Actions
    </th>
  </tr>
  </thead>
</template>

<style scoped>

</style>
