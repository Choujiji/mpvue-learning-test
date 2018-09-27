<template>
    <div class="container btns">
        <button
            class="calbtn"
            @click="handleDecrement"
        >-</button>
        <span class="calnum">{{ count }}</span>
        <button
            class="calbtn"
            @click="handleIncrement"
        >+</button>
    </div>
</template>

<script>
    import globalStore from "@/stores/global-store"

    export default {
        computed: {
            count () {
                return globalStore.state.count
            }
        },
        methods: {
            handleIncrement () {
                globalStore.commit("increment")
            },
            handleDecrement () {
                globalStore.commit("decrement")
            }
        }
    }
</script>

<style scoped>
    .btns {
        display: flex;
        align-items: center;
    }
    .calnum {
        color: red;
        font-size: 32px;
    }
</style>