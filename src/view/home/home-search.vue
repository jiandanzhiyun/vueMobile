<template>
<div class="home-search">
    <van-search
            v-model="value"
            background="#04befe"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="$router.go(-1)"
    />
    <van-skeleton
            :row="20"
            :loading="loading"
    >
    <div class="search-find">
        <div class="find-top flex-container flex-jus-sp flex-align-c">
            <h2>搜索发现</h2>
            <span class="flex-container flex-jus-c flex-align-c">换一换<van-icon name="replay" /></span>
        </div>
        <div class="find-msg flex-container flex-wrap-w flex-jus-st">
            <div class="find-dl ellipsis" v-for="(item,index) in list" v-if="index < 5">{{item.name}}</div>
        </div>
    </div>
    <div class="search-find">
        <div class="find-top flex-container flex-jus-sp flex-align-c">
            <h2 class="flex-container flex-jus-st flex-align-c find-hot"><van-icon name="fire-o" size=".8rem" color="#04befe" />热搜榜</h2>
            <span class="flex-container flex-jus-c flex-align-c" @click="$router.push('/home_hot')">更多热榜<van-icon name="arrow" /></span>
        </div>
        <div class="find-msg find-list flex-container flex-wrap-w flex-jus-st flex-align-s text-left">
            <li v-for="(item,index) in list" class="flex-container  flex-jus-st flex-align-c">
                <b class="find-number">{{index+1}}</b>
                 <span class="ellipsis">{{item.name}}</span>
            </li>
        </div>
    </div>

    </van-skeleton>
</div>
</template>

<script>
    export default {
        name: 'home-search',
        data(){
            return{
                value:'',
                list:[],
                loading:false
            }
        },
        mounted(){
            this.list=this.$store.state.list
        },
        methods:{
            onSearch(){},
            onCancel(){}
        }
    };
</script>

<style scoped>
    .van-search__action{
        color: #fff;
    }
    .van-search__content{
        border-radius: 17px;
    }
    .van-search__action:active{
        background-color:inherit;
    }
    .search-find{
        width: 100%;
        padding: .5rem .75rem;
        box-sizing: border-box;
        font-size: .6rem;
    }
    .find-top h2{
        color: #333;
    }
    .find-top span{
        color: #999;
    }
    .find-msg{
        width: 100%;
    }
    .find-dl{
        padding: .25rem .5rem;
        border-radius: 1rem;
        font-size: .6rem;
        background: #eee;
        margin: .25rem .5rem 0 0;
    }
    .find-top .find-hot{
        color:rgb(4, 190, 254) ;
        font-size: .8rem;
    }
    .find-list{
        background: #fff;
        margin-top: .5rem;
        padding: .5rem .75rem;
        box-shadow: #eee 0 0 .5rem;
    }
    .find-list li{
        width: 100%;
        padding: .25rem 0;
        color: #333;
    }
    .find-number{
        color: #FF9500;
        padding-right:.5rem;
    }

</style>
