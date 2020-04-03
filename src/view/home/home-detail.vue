<template>
    <div class="home-detail">
        <van-nav-bar  left-arrow fixed @click-left="$router.go(-1)" :border="false" z-index='999' class="bar-nav">
            <template #title>
            <van-search
                    v-model="value"
                    shape="round"
                    background="#04befe"
                    placeholder="搜索你喜欢的关键词"
            />
            </template>
        </van-nav-bar>
        <div class="home-tabs">
            <van-tabs v-model="current" @click="nextGo(current)"  color="#fff" :border="false">
                <van-tab v-for="index in list" :title="index.name" >
                </van-tab>
            </van-tabs>
            <div class="tabs-right flex-container flex-jus-c flex-align-c"><van-icon name="bars" />分类</div>
        </div>
        <div class="detail-box">
            <div class="detail-background flex-container flex-wrap-w flex-jus-st">
                <div class="detail-width van-ellipsis" v-for="(item,index) in list" :class="active==index ? 'detail-active':''" @click="getChoice(index)">
                        {{item.name}}
                </div>
            </div>
        </div>
        <van-sticky :offset-top="55">
        <div class="detail-multiple">
            <div class="multiple-tab flex-container flex-jus-sa flex-align-c">
                <div class="multiple-width flex-container flex-jus-c flex-align-c" :class="rank==0 ? 'rank-active':''" @click="multiple(0)">综合<van-icon name="arrow-down" v-show="rank==0"/></div>
                <div class="multiple-width flex-container flex-jus-c flex-align-c" :class="rank==1 ? 'rank-active':''" @click="multiple(1)">销量<van-icon name="arrow-down" v-show="rank==1"/></div>
                <div class="multiple-width flex-container flex-jus-c flex-align-c" :class="rank==2 ? 'rank-active':''" @click="multiple(2)">价格<van-icon name="arrow-down" v-show="rank==2"/></div>
            </div>
        </div>
        </van-sticky>
        <list ref="list"></list>
    </div>
</template>

<script>
    import list from '../../components/list'
    export default {
        name: 'home-detail',
        data(){
            return{
                value:'',
                list:[],
                current:0,
                active:0,
                rank:0,


            }
        },
        components:{
            list
        },
        mounted(){
            this.list=this.$store.state.list

        },

        methods:{

            nextGo(number){

            },
            getChoice(index){
              this.active=index
            },
            multiple(index){
                this.rank=index
            }
        }
    };
</script>

<style scoped>
    .van-search{
        padding: 5px 0;
    }
    .van-nav-bar__title{
        max-width: 80%;
    }
    .home-tabs{
        width: 100%;
        padding: 46px 2rem 0 .5rem;
        position: relative;
        background:#04befe;
    }
    .tabs-right{
        position: absolute;
        right:0;
        z-index: 1;
        background:#04befe;
        top: 46px;
        font-size: .7rem;
        padding:0 .25rem;
        color: #fff;
        height: 44px;
        line-height: 44px;
        box-shadow:-5px 0 10px -5px #0894c3;
        border-radius: 2px 0 0 2px;
    }
   .detail-box{
    width: 100%;
       padding: .75rem;
      background:#04befe;
   }
    .detail-background{
        background: #fff;
        border-radius: 5px;
        padding: .5rem .5rem 0;
    }
    .detail-width{
        width: calc((100% - 2.5rem) / 4);
        background:#eee;
        border-radius: 17px;
        padding:.1rem .25rem;
        font-size: .6rem;
        margin:0 0 .5rem .5rem;
        color: #999;

    }
    .detail-active{
        background:#04befe;
        color: #fff;
    }
    .detail-multiple{
        width: 100%;
        padding: 0 .75rem;
        margin-top: -.5rem;
    }

    .multiple-tab{
        width: 100%;
        background: #fff;
        padding: .35rem 0;
        border-radius: 5px;
        box-shadow:5px 5px 10px -5px #eee;
        font-size: .7rem;
        color: #666;
    }
    .multiple-width{
        width: calc(100% / 3);
    }
    .rank-active{
        color: #04befe;
    }
</style>
