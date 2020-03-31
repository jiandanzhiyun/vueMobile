<template>
        <div class="list">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list  class="list-ul flex-container flex-wrap-w flex-jus-st"
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                >
                <li class="list-li" v-for="item in list">
                    <div class="list-img"><img :src="item.img" alt=""></div>
                    <div class="ellipsis font14 text-left list-name">{{item.name}}</div>
                    <div class="font14 text-left list-price">￥{{item.price}}</div>
                    <div class="font12 text-left list-sales">{{item.number/10000}}万笔</div>
                </li>
                </van-list>
            </van-pull-refresh>
        </div>
</template>

<script>
    export default {
        name: 'list',
        data(){
            return{
                list:[],
                isLoading:false,
                loading:false,
                finished:false
            }
        },
        mounted() {
            this.list=this.$store.state.list
        },methods:{
            onRefresh(){

            },
            onLoad(){

            }
        }
    };
</script>

<style scoped>
.list{
    padding:.75rem;
    width: 100%;
}
.list-ul{
  width: 100%;
}
.list-ul .list-li{
    width: calc((100% - .5rem) / 2);
    background: #fff;
    box-shadow:5px 5px 10px -5px #eee;
    overflow: hidden;
    padding-bottom: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
    border-radius: 5px;
}
.list-ul .list-li:nth-child(2n){
    margin-right: 0;
}
.list-img{
    width: 100%;
    height:6rem;
    overflow: hidden;
}
.list-img >img{
    width: 100%;
    height: auto;
    object-fit: cover;
}
    .list-name{
        padding:.5rem .5rem 0;
    }
    .list-price{
        color:#ff0036 ;
        padding:0 .5rem 0;
    }
    .list-sales{
        color: #999;
        padding:0 .5rem 0;
    }
</style>
