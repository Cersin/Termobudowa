import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reference from "../views/Reference";
import Gallery from "../views/Gallery";
import Certificate from "../views/Certificate";

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
    },
    {
      path: '/galeria',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/certyfikaty',
      name: 'Certificate',
      component: Certificate
    }


]

const router = new VueRouter({
  routes
})

export default router
