import {defineStore} from "pinia";

import type State from "./interfaces";

import getters from "./getters";

const  useIncomesStore = defineStore('incomesStore', {
    state: (): State => ({
        incomes: []
    }),
    getters,
    actions: {

    }
});

export default useIncomesStore;
