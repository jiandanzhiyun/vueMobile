import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)
//非大型项目不必使用~
//创建VueX对象
const store = new Vuex({
    state:{
        //存放的键值对就是所要管理的状态
        name:'helloVueX'
    },
    mutations:{


    }
})

export default store
