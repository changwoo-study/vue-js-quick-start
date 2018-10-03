import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        [Constant.SEARCH_CONTACT]: (state, payload) => {
            state.contacts = payload.contacts;
        }
    },
    actions: {
        [Constant.SEARCH_CONTACT]: async (store, payload) => {
            const response = await axios.get(Constant.BASE_URL + payload.name);
            store.commit(Constant.SEARCH_CONTACT, {contacts: response.data});
        }
    }
});

export default store;
