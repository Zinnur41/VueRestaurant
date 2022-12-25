import Vue from 'vue'
import Router from 'vue-router'

import catalogProduct from "@/components/catalog/Catalog-product";
import cartProduct from "@/components/cart/Cart-product";
import UserInfo from "@/components/userInfo/User-info";
import feedBack from "@/components/feedback/feed-back";
Vue.use(Router);
let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: catalogProduct
        },
        {
            path: '/cart',
            name: 'cart',
            component: cartProduct,
            props: true
        },
        {
            path: '/registration',
            name: 'registration',
            component: UserInfo,
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: feedBack,
        }
    ]
})

export default router