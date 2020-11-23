import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { fetchItem } from './api.js'

export function createStore() {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            fetchItem({ commit }, id) {
                return fetchItem(id).then(item => {
                    commit('items', { id, item })
                })
            }
        },

        mutations: {
            setItem(state, { id, item }) {
                Vue.set(state.items, id, item)
            }
        }
    })
}