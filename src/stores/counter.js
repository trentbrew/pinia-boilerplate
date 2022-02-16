import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 0 };
    },
    actions: {
        increment(val = 1) {
            this.count += val;
            console.log(this.doubleCount);
        },
        async waitAndAdd() {
            setTimeout(() => {
                this.count++;
            }, 2000);
        },
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
});

