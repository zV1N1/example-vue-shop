import { createRouter, createWebHistory } from "vue-router"

import ProductList from './pages/ProductList.vue'
import UserCart from './pages/UserCart'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            redirect: '/products'
        },
        { 
            name: 'products',
            path: '/products', 
            component: ProductList 
        },
        { 
            path: '/cart', 
            component: UserCart
        },
        { 
            path: '/:notFound(.*)', 
            redirect: '/products'
        }
    ]
})

export default router;
