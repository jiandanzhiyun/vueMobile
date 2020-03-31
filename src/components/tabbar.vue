<template>
    <div class="mainNav">
        <van-tabbar v-model="active" @click.native="tab()" active-color="#04befe" inactive-color="#C1C1C1">
            <van-tabbar-item icon="wap-home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item icon="shop-o">
                第二页
            </van-tabbar-item>
            <van-tabbar-item icon="apps-o">
                第三页
            </van-tabbar-item>
            <van-tabbar-item icon='contact'>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: 'mainNav',
    data() {
        return {
            active: 0,
        };
    },
    mounted() {

    },
    watch: {},
    methods: {
        init(number){
            this.active=number
            switch (number) {
                case 0:
                    this.$router.push('/home')
                break;
                case 1:
                    this.$router.push('/two')
                break;
                case 2:
                    this.$router.push('/three')
                break;
                case 3:
                    this.$router.push('/four')
                break;
                default:
                    break;
            }
        },
        tab() {

            this.$emit("tab",this.active)
        }
    }
};
</script>

<style scoped>
.van-tabbar-item {
    font-size: 0.6rem;
}
</style>
