<template>
    <div class="page1">
        <div>计数结果：{{ count }}</div>
        <a 
            href="/pages/page2/main"
            class="navlink"
        >进入计数器页面</a>
    </div>
</template>

<script>
    import globalStore from '@/stores/global-store'

    export default {
        data () {
            return {

            }
        },
        computed: {
            count () {
                return globalStore.state.count
            }
        }
    }
</script>

<style scoped>
    .page1 {
        /* display: flex; */
        /* align-items: center; */
    }
    .navlink {
        text-decoration: underline
    }
</style>
