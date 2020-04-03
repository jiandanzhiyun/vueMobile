<template>
    <div class="home-hot">
        <van-nav-bar fixed :border="false"
                title="热搜榜"
                left-arrow
                @click-left="$router.go(-1)"
        />
        <div class="hot-explain text-justify">
            热度指数根据热搜词的搜索量级、搜索增幅等指标计算得出，每小时更新
        </div>
        <van-skeleton
                :row="15"
                :loading="loading"
        >
        <ul class="hot-list">
            <li v-for="(item,index) in list" class="flex-container flex-jus-sp flex-align-c">
                <div class="van-ellipsis">
                    <b>{{index+1}}</b>
                    <span>{{item.name}}</span>
                    <b class="hot-bg" v-if="item.hot==0">热</b>
                </div>
                <div class="hot-right">{{item.number}}</div>
            </li>
        </ul>
        </van-skeleton>
    </div>
</template>

<script>
    export default {
        name: 'home-hot',
        data(){
            return{
                list:[],
                loading:false
            }
        },
        mounted(){
            this.list=this.$store.state.list
        },
        methods:{

        }
    };
</script>

<style scoped>
.hot-explain{
    padding:2.8rem .75rem 0.5rem;
    color: #999;
    font-size: .6rem;
}
.hot-list{
    width: 100%;
    padding:0 .75rem;
    box-sizing: border-box;
}
.hot-list li{
    font-size: .7rem;
    color: #333;
    background: #f9f9f9;
    border-radius: 1rem;
    padding: .25rem .5rem;
    margin-bottom: .5rem;
}
.hot-list li b{
    color:#fff ;
    background: #FF9500;
    padding: 0 .25rem;
    border-radius: 50%;
    margin-right: .5rem;
}
.hot-list li .hot-bg{
    background:#ff0036;
    padding:.05rem;
    font-size: .5rem;
    margin-left: .5rem;
}
    .hot-right{
        float: right;
        font-size: .6rem;
        color: #999;
    }
</style>
