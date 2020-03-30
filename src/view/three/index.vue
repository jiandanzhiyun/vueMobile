<template>
    <div>
        第三页
        <tabbar @tab="choice"  ref="tabbar"></tabbar>
    </div>
</template>

<script>
    import tabbar from '../../components/tabbar'
    export default {
        name: 'index',
        data(){
            return{
                active:2
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
            }
        }
    };
</script>

<style scoped>

</style>
