<script setup lang="ts">

import OutcomesTableHead from "@/components/OutcomesTable/OutcomesTableHead.vue";

import useOutcomesStore from "@/stores/outcomes";
import OutcomesTableRow from "@/components/OutcomesTable/OutcomesTableRow.vue";

const outcomesStore = useOutcomesStore();

const {outcomes} = outcomesStore;

const head = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'toPay',
    label: 'To pay'
  },
  {
    key: 'paid',
    label: 'Paid'
  },
  {
    key: 'comments',
    label: 'Comments'
  },
  {
    key: 'status',
    label: 'Status'
  }
]
</script>

<template>
  <table class="table table-striped">
    <OutcomesTableHead :head="head"/>
    <tbody>
    <OutcomesTableRow
        v-for="(outcome, index) in outcomes"
        :key="outcome.id"
        :outcome="outcome"
        :index="index"
    />
    </tbody>
  </table>
  <div class="text-end">
    <button class="btn btn-sm btn-primary">+</button>
  </div>
</template>

<style scoped>

</style>
