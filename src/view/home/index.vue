<template>
<div class="home">
    <van-search disabled
            shape="round"
            background="#04befe"
            placeholder="请输入搜索关键词" @click="$router.push('/home_search')"
    />
    <div class="home-tabs">
        <van-tabs v-model="current" @click="nextGo(current)" color="#fff" :border="false">
            <van-tab v-for="index in list" :title="index.name" >
            </van-tab>
        </van-tabs>
        <div class="tabs-right flex-container flex-jus-c flex-align-c"><van-icon name="bars" />分类</div>
    </div>

    <van-swipe :autoplay="3000" class="home-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image" />
        </van-swipe-item>
    </van-swipe>

 <tabbar @tab="choice"  ref="tabbar"></tabbar>
</div>
</template>
<script>
import tabbar from '../../components/tabbar'
    export default {
        name: 'index',
        data(){
            return{
                value:'',
                active:0,
                current:0,
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                list:[ ]
            }
        },
        components:{
            tabbar
        },
        mounted(){
            this.$refs.tabbar.init(this.active)
            this.list=this.$store.state.list
        },
        methods:{
            choice(event){
             this.active=event
             this.$refs.tabbar.init(this.active)
            },
            nextGo(number){
                switch (number) {
                    case 0:
                        this.$router.push('/home_detail')
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    default:
                        break;
                }
            }
        }
    };
</script>

<style type="text/css" scoped>
.van-tabs__nav{
        background-color:#04befe;
}
.home-swipe{
    width: 100%;
}
.van-swipe-item >img{
    width: 100%;
    max-height: 9rem;
}
.home-tabs{
    width: 100%;
    padding: 0 2rem 0 .5rem;
    box-sizing: border-box;
    position: relative;
    background:#04befe;
}
.tabs-right{
    position: absolute;
    right:0;
    z-index: 9999;
    background:#04befe;
    top: 0;
    font-size: .7rem;
    padding:0 .25rem;
    color: #fff;
    height: 44px;
    line-height: 44px;
    box-shadow:-5px 0 10px -5px #0894c3;
    border-radius: 2px 0 0 2px;
}

</style>
