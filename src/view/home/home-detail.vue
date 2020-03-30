<template>
    <div class="home-detail">
        <van-nav-bar
                title="标题"
                left-arrow
                @click-left="$router.go(-1)"
        />
    </div>
</template>

<script>
    export default {
        name: 'home-detail'
    };
</script>

<style scoped>

</style>
