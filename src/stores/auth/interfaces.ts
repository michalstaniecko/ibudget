import router from "@/router";
import type {Router} from "vue-router";

export default interface State {
    user: {
        id?: string,
        name?: string
    }
}
