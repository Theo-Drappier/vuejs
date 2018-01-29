import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

/*
let jsonResponse = 0

let xhttp = new XMLHttpRequest()
xhttp.overrideMimeType('application/json')
xhttp.open('GET', 'http://localhost:8000/api/tests', true)
xhttp.onload = function () {
  jsonResponse = xhttp.response
}
xhttp.send(null)
*/
