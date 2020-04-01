<template>
    <div>
        第二页
        <tabbar @tab="choice"  ref="tabbar"></tabbar>
    </div>
</template>

<script>
    import tabbar from '../../components/tabbar'
    export default {
        name: 'index',
        data(){
            return{
                active:1
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
