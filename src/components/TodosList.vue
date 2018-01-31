<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="todo in todosList" v-bind:key='todo.id'>
        {{ todo.id }} => {{ todo.name }}
      </li>
    </ul>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodosList',
  data () {
    return {
      msg: 'Todos List',
      todosList: []
    }
  },
  created () {
    axios.get('http://127.0.0.1:8000/api/tests')
      .then(response => {
        this.todosList = response.data
      }
      )
      .catch(e => {
        console.log(e)
      }
      )
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
