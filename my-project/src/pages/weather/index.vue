<template>
    <div class="container">
        <weather />
        <button @click="goBack">返回</button>
    </div>
</template>

<script>
import Weather from '@/components/weather'

export default {
    components: {
        Weather
    },
    methods: {
        goBack () {
            // $router为路由对象
            this.$router.back()
        }
    },
    mounted() {
        // $route为路由信息对象
        console.log('path - ', this.$route.path)
        console.log('query = ', this.$route.query)
        console.log('name = ', this.$route.name)
    },
}
</script>

<style scoped>

</style>


