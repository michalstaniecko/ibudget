<script setup lang="ts">
import type {OutcomeInfo} from "@/stores/outcomes/interfaces";
import {computed} from "vue";
import {useFormatCurrency} from "@/use/useFormatCurrency";

interface Props {
  outcome: OutcomeInfo,
  index: number
}

const props = defineProps<Props>();

const {outcome, head} = props;

const outcomeIndex = computed(() => props.index + 1);

const {getFormattedCurrency} = useFormatCurrency();

const isUnpaid = computed(() => {
  return props.outcome.status !== 'paid';
});

</script>

<template>
  <tr :class="{'bg-success': outcome.status === 'paid'}">
    <td>
      {{ outcomeIndex }}
    </td>
    <td>
      {{ outcome.name }}
    </td>
    <td>
      {{ getFormattedCurrency(outcome.toPay) }}
    </td>
    <td>
      <template v-if="!isUnpaid">
        {{ getFormattedCurrency(outcome.paid) }}
      </template>
    </td>
    <td>
      {{ outcome.comments }}
    </td>
    <td>
      {{ outcome.status }}
    </td>
    <td>
      Edit / Delete
    </td>
  </tr>
</template>

<style scoped>

</style>
