<template>
    <div class="mainNav">
        <div class="home-box">
            <home v-if="active == 0"></home>
            <two v-if="active == 1"></two>
            <three v-if="active == 2"></three>
            <four v-if="active == 3"></four>
        </div>

        <van-tabbar v-model="active" active-color="#ed616c" inactive-color="#C1C1C1">
            <van-tabbar-item>
                首页
            </van-tabbar-item>
            <van-tabbar-item>
                第二页
            </van-tabbar-item>
            <van-tabbar-item icon="notes-o">
                第三页
            </van-tabbar-item>
            <van-tabbar-item icon='contact'>
                第四页
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import home from '../view/home/index';
import two from '../view/two/index';
import three from '../view/three/index';
import four from '../view/four/index';
export default {
    name: 'mainNav',
    data() {
        return {
            active: 0,
        };
    },
    components: {
        home,
        two,
        three,
        four
    },
    mounted() {},
    watch: {},
    methods: {
        tab(value) {
            // this.selected =this.$parent.selected
            this.active = value;
        }
    }
};
</script>

<style scoped>
.van-tabbar-item {
    font-size: 0.6rem;
}
</style>
