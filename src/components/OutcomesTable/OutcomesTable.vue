<script setup lang="ts">

import OutcomesTableHead from "@/components/OutcomesTable/OutcomesTableHead.vue";

import useOutcomesStore from "@/stores/outcomes";
import OutcomesTableRow from "@/components/OutcomesTable/OutcomesTableRow.vue";

const outcomesStore = useOutcomesStore();

const {outcomes} = outcomesStore;
</script>

<template>
  <table>
    <OutcomesTableHead/>
    <tbody>
    <OutcomesTableRow
        v-for="(outcome, index) in outcomes"
        :key="outcome.id"
        :outcome="outcome"
        :index="index"
    />
    </tbody>
  </table>
</template>

<style scoped>

</style>
