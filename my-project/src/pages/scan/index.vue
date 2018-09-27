<template>
    <div class="index">
        <button @click="scanCode">
            扫描图书
        </button>
        <div>
            结果：{{scanResult}}
        </div>
        <h3>图书列表</h3>
        <div 
            class="book-name"
            v-for="(item, index) in books"
            v-bind:key="index"
        >
            {{item.title}}
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                scanResult: '',
                books: []
            }
        },
        methods: {
            scanCode () {
                wx.scanCode({
                    success: (res) => {
                        console.log(res)
                        console.log(typeof res)
                        this.scanResult = res.result
                    }
                })
            }
        },
        async mounted() {
            try {
                const result = await this.$get('booklist')
                console.log(result)
                this.books = result.data
            } catch (error) {
                console.log(error)
            }
        },
    }    
</script>

<style scoped>
    .book-name {
        margin-top: 10px;
        font-size: 15px;
    }
</style>
