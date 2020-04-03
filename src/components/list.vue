<template>
        <div class="list">
            <van-pull-refresh v-model="isDownLoading" @refresh="onDownRefresh">
                <van-list class="list-ul flex-container flex-wrap-w flex-jus-st"
                        v-model="isUpLoading"
                        :finished="upFinished"
                        :immediate-check="false"
                        :offset="offset"
                        finished-text="我是有底线的"
                        @load="onLoadList"
                >
                <li class="list-li" v-for="item in list">
                    <div class="list-img"><img :src="item.img" alt=""></div>
                    <div class="van-ellipsis font14 text-left list-name">{{item.name}}</div>
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
                finished:false,
                isDownLoading: false, // 下拉刷新
                isUpLoading: false, // 上拉加载
                upFinished: false, // 上拉加载完毕
                offset: 300, // 滚动条与底部距离小于 offset 时触发load事件
                limit:10,
                page:0,

            }
        },
        created(){
            this.getroadList()
        },
        mounted() {
            this.list=this.$store.state.list
        },methods:{

            //下拉刷新
            onDownRefresh() {
                this.page =0
                let that=this;
                setTimeout(function() {
                    that.upFinished = false // 不写这句会导致你上拉到底过后在下拉刷新将不能触发下拉加载事件
                    that.list=[]
                    that.getroadList() // 加载数据
                },300)

            },
            onLoadList() {
                // 异步更新数据
                this.page++;
                this.getroadList()


            },
            getroadList(){
                const _self = this
                _self.isDownLoading = false
                //请求接口需要用到的
                // if(rows==null || rows.length==0){
                //     // 加载状态结束
                //     _self.upFinished = true;
                // }if(rows.length<this.limit){
                //     _self.upFinished = true
                // }if(this.page==1){
                //     _self.list = rows
                // }else{
                //     _self.list = _self.list.concat(rows)
                // }
            },
        }
    };
</script>

<style scoped>
.list{
    padding:.75rem;
    width: 100%;
}
.list-ul{
  width: 100%;      /* 将 div 元素中的文本分为2列，并规定列间1rem像素的间隔。 */
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
