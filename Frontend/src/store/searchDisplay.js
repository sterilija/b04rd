import { defineStore } from 'pinia'

export const useSearchDisplayStore = defineStore('searchDisplay', {
    state: () => {
        return { shown: true }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        doShow(bool){
            this.shown = bool;
        },
    },
    getters: {
        getState(){
            return this.shown;
        }
    }
})