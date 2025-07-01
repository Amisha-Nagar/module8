import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AboutPageView from '@/views/AboutPageView.vue';
import AboutMeView from '@/views/AboutMeView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import ContactView from '../views/ContactView.vue';
import NotFoundView from '@/views/NotFoundView'

const routes = [
  {
    path: '/', 
    name: 'Home', 
    component: HomeView 
  },
  {
    path: '/about',  
    component: AboutPageView,
    children: [
      {
      path: '/aboutme', 
      name: 'AboutMe', 
      component: AboutMeView,
      },
      {
      path: '/aboutus', 
      name: 'AboutUs', 
      component: AboutUsView,
      }
    ] 
  },
  {
    path: '/contact', 
    name: 'Contact', 
    component: ContactView 
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFoundView 
  }
  
];


export default createRouter({
  history: createWebHistory(),
  routes
});