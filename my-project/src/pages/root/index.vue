<template>
    <div class="container">
        <button @click="gotoTodo">TodoList</button>
        <button @click="gotoWeather">Weather</button>
    </div>
</template>

<script>
export default {
    methods: {
        gotoTodo () {
            this.$router.push('/pages/todo_list/main')
        },
        gotoWeather () {
            this.$router.push({
                path: '/pages/weather/main',
                query: {
                    foo: 1,
                    bar: 'b'
                }
            })
        }
    },
    mounted() {
        console.log(this.$router.currentRoute)
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
    }
</style>


