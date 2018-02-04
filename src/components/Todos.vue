<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.label }}
      </li>
    </ul>
  </div>
</template>

<script>

import api from '../api';

export default {
  name: `Todos`,
  data() {
    return {
      todos: [],
    };
  },
  created() {
    api.get(`/todos`)
      .then((response) => {
        this.todos = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
