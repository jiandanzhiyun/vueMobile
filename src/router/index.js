import Vue from 'vue';
import Router from 'vue-router';
const login = () => import('../view/login.vue')
const tabbar = () => import('../components/tabbar') //主页
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/one'
        },
        {
            path: '/login',
            component: login,
            meta: { title: '登录' },

        },

        { path: "/one", component: tabbar, name: "tabbar",meta:{title:'主页'} },

    ]
});
