import Vue from 'vue';
import App from './App.vue';
import router from './router';

// ajax
import axios from 'axios';

// UI

import 'vant/lib/index.css';


// common css
import './assets/css/base.css';

Vue.config.productionTip = false;
axios.defaults.withCredentials = false
//使用钩子函数对路由发生变化修改页面title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    const role = localStorage.getItem('token');
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }


})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
