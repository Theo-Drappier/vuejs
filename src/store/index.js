import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 4,
        label: `test`,
      },
    ],
  },
  getters: {
    count(state) {
      return state.todos.length;
    },
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    POPULATE_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    getTodos(context) {
      api.get(`/todos`)
        .then((response) => {
          context.commit(`POPULATE_TODOS`, response.data.row);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
});
