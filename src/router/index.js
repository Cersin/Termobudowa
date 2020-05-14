import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Reference from "../views/Reference";
import Gallery from "../views/Gallery";
import Certificate from "../views/Certificate";
import Kontakt from "../views/Kontakt";

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
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt
    }


]

const router = new VueRouter({
  routes
})

export default router
