import Vue from 'vue';
import Vuex from 'vuex';
import Constants from '../Constants';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todoList: [
            {
                todo: '영화보기',
                done: false
            },
            {
                todo: '주말 산책',
                done: true
            },
            {
                todo: 'ES6 학습',
                done: false
            },
            {
                todo: '잠실 야구장',
                done: false
            }
        ]
    },
    mutations: {
        [Constants.ADD_TODO]: (state, payload) => {
            if (payload.todo !== '') {
                state.todoList.push({
                    todo: payload.todo,
                    done: false
                });
            }
        },
        [Constants.DONE_TOGGLE]: (state, payload) => {
            state.todoList[payload.index].done = !state.todoList[payload.index].done;
        },
        [Constants.DELETE_TODO]: (state, payload) => {
            state.todoList.splice(payload.index, 1);
        }
    }
});

export default store;
