import {createRouter, createWebHistory } from "vue-router"
import Home from '@/views/Home.vue'

const routes = [
    {path: "/", name: 'Home', component: Home},
    {path: "/about", name: 'About', component: ()=>import('@/views/About.vue')},
    {path: "/illustrations", name: 'illustrations', component:()=>import('@/views/Illustrations.vue')},
    {path: "/concept", name: 'concept', component: ()=>import('@/views/Concept.vue')},
    {path: "/contact", name: 'contact', component: ()=>import('@/views/Contact.vue')},
    {path: "/animation", name: 'animation', component: ()=>import('@/views/Animation.vue')},
    {path: '/tanavigp/:id', name: 'destination.show' ,component: ()=>import('@/views/DestinationShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router