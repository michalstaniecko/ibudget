import {defineStore} from "pinia";

import getters from "./getters";
import type State from "./interfaces";

const useOutcomesStore = defineStore('outcomesStore', {
    state: (): State => ({
        outcomes: []
    }),
    getters,
    actions: {

    }
});

export default useOutcomesStore;
