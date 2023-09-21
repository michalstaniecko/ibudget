import type State from "@/stores/outcomes/interfaces";

export default {
    getOutcomes: (state: State) => {
        return state.outcomes
    }
}
