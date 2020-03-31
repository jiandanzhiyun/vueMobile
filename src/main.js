import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'

// ajax
import axios from 'axios';

// UI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// common css
import './assets/css/base.css';

Vue.config.productionTip = false;
axios.defaults.withCredentials = false
//使用钩子函数对路由发生变化修改页面title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
    // const role = localStorage.getItem('token');
    // if (!role && to.path !== '/login') {
    //     next('/login');
    // } else {
    //     next();
    // }


})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
