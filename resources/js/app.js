import { createApp } from 'vue';
import './bootstrap';
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from './Welcome.vue'
import Index from './components/Index.vue'
import Create from './components/Create.vue'
import Edit from './components/Edit.vue'

const routes = [
    {
        path: "/", component: Index, name:'home'
    },
    {
        path: "/create", component: Create
    },
    {
        path: "/edit/:id", component: Edit, name: "edit"
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
createApp(Welcome).use(router).mount('#app')