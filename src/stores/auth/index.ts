import {defineStore} from "pinia";

import type State from './interfaces';

export const useAuthStore = defineStore('auth', {
    state: (): State => {
        return {
            user: {}
        }
    },
    actions: {
        init(): void {

        },

        login(email: string, password: string): void {
            console.log('login', email, password);
            this.user.id = 'u1';
            this.router.push('/');
        },

        register(email: string, password: string): void {
            console.log('register', email, password);
            this.user.id = 'u1';
            this.user.name = 'Michał';
            this.router.push('/');
        }
    },
    getters: {
        isLogged(): boolean {
            return !!this.user.id;
        }
    }
})
