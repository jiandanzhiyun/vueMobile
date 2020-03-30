<template>
<div class="home">
    <van-tabs v-model="current" @click="nextGo(current)">
        <van-tab v-for="index in list" :title="index.name" >
        </van-tab>
    </van-tabs>
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
                active:0,
                current:0,
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                list:[
                    {
                        name:'舒适口罩'
                    },
                    {
                        name:'脱毛仪'
                    },
                    {
                        name:'美味猫条'
                    },
                    {
                        name:'袋装泡面'
                    },
                    {
                        name:'无油烟煎锅'
                    },
                    {
                        name:'抽取式纸抽'
                    },
                    {
                        name:'宽松毛衣'
                    }
                ]
            }
        },
        components:{
            tabbar
        },
        mounted(){
            this.$refs.tabbar.init(this.active)
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
.home-swipe{
    width: 100%;
}
.van-swipe-item >img{
    width: 100%;
    max-height: 9rem;
}
</style>
