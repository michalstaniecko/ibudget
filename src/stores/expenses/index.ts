import {defineStore} from "pinia";

import actions from './actions';
import getters from "./getters";
import type State from "./interfaces";

const useExpensesStore = defineStore('expensesStore', {
    state: (): State => ({
        expenses: []
    }),
    actions,
    getters,
});
