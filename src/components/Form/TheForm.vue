<script setup lang="ts">
  const props = defineProps({
    submitHandler: {
      type: Function, //TODO: check what type should it be
      required: true
    },
    submitLabel: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <form @submit.prevent="submitHandler" novalidate>
    <div class="d-grid gap-3">
      <slot></slot>
      <div class="">
        <button class="btn btn-primary">{{ submitLabel }}</button>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>
