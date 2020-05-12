import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reference from "../views/Reference";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/referencje',
      name: 'Reference',
      component: Reference
    }


]

const router = new VueRouter({
  routes
})

export default router
