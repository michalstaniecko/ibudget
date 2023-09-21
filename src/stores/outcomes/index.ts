import {defineStore} from "pinia";

import getters from "./getters";
import type State from "./interfaces";
import type {OutcomeInfo} from "./interfaces"

const outcomesDummy: OutcomeInfo[] = [
    {
        id: 'oc1',
        name: 'Jedzenie',
        toPay: 150050,
        paid: 0,
        status: "unpaid",
        comments: null,
        outcomeDate: (new Date()).getTime(),
        categoryId: 'cat1',
        created: (new Date()).getTime(),
        typeId: 'type1'
    },
    {
        id: 'oc2',
        name: 'Czynsz',
        toPay: 65000,
        paid: 65000,
        status: "paid",
        comments: null,
        outcomeDate: (new Date()).getTime(),
        categoryId: 'cat1',
        created: (new Date()).getTime(),
        typeId: 'type1'
    }
]

const useOutcomesStore = defineStore('outcomesStore', {
    state: (): State => ({
        outcomes: outcomesDummy
    }),
    getters,
    actions: {

    }
});

export default useOutcomesStore;
