<template>
    <div id="app" v-cloak>
        <transition :name="transitionName">
            <router-view class="router-view"></router-view>
        </transition>

    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                transitionName: 'vux-pop-in',
            }
        },
        watch:{
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > from.meta.index){
                    //设置动画名称
                    this.transitionName = 'vux-pop-in';
                }if(to.meta.index == from.meta.index){

                    this.transitionName = 'fade';
                }else if(to.meta.index < from.meta.index){
                    this.transitionName = 'vux-pop-out';
                }
            }
        }
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow: hidden;
    }
    .router-view{
        width: 100%;
        position: absolute;
        -webkit-transition: all .3s cubic-bezier(.55,0,.1,1);
        -moz-transition: all .3s cubic-bezier(.55,0,.1,1);
        -ms-transition: all .3s cubic-bezier(.55,0,.1,1);
        -o-transition: all .3s cubic-bezier(.55,0,.1,1);
        transition: all .3s cubic-bezier(.55,0,.1,1);
        height:100%;
        overflow-x: hidden;
    }
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }
    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
