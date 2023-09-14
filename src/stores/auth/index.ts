import {defineStore} from "pinia";

import type State from './interfaces';

export const useAuthStore = defineStore('auth', {
    state: (): State => {
        return {
            user: {}
        }
    },
    actions: {
        login(email: string, password: string) {
            console.log('login', email, password);
            this.user.id = 'u1';
            this.router.push('/');
        }
    },
    getters: {
        isLogged(): boolean {
            return !!this.user.id;
        }
    }
})
