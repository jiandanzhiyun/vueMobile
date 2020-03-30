import Vue from 'vue';
import Router from 'vue-router';
const login = () => import('../view/login.vue')
const home = () => import('../view/home/index') //主页
const home_detail = () => import('../view/home/home-detail') //主页-
const two = () => import('../view/two/index') //
const three = () => import('../view/three/index') //
const four = () => import('../view/four/index') //
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            component: login,
            meta: { title: '登录' },

        },

        { path: "/home", component: home, name: "home",meta:{title:'首页',index:0} },
        { path: "/home_detail", component: home_detail, name: "home_detail",meta:{title:'首页-推荐',index:1} },
        { path: "/two", component: two, name: "two",meta:{title:'第二页',index:0} },
        { path: "/three", component: three, name: "three",meta:{title:'第三页',index:0} },
        { path: "/four", component: four, name: "four",meta:{title:'第四页',index:0} },

    ]
});
