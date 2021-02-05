import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home/Home";


Vue.use(VueRouter)



export default new VueRouter({
    mode: "history",
    base: __dirname,
    routes: [{
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/posts',
            component: () =>
                import ('../views/Cards/Cards'),
            name: 'posts'
        },
        {
            path: '/posts/:id',
            component: () =>
                import ('../views/CurrentCard'),
            name: 'current-card'
        },

        {
            path: '/create',
            component: () =>
                import ('../views/CreatePost'),
            name: 'create-post'
        }
    ]
})