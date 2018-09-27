<template>
    <div class="container">
        <todo-list
            v-on:addTodo="saveValue"
            v-on:toggleItem="toggleItem"
            v-on:removeItem="removeItem"
            v-bind="motto"
        />
    </div>
</template>

<script>
import TodoList from '@/components/todo-list'
import globalStore from '@/stores/global-store'

export default {
    components: {
        TodoList
    },
    data () {
        return {
            motto: {
                title: 'Hello',
                items: globalStore.state.todoList
            }
        }
    },
    methods: {
        saveValue (val) {
            // 添加item
            globalStore.commit(
                'addTodo',
                {
                    name: val,
                    completed: false
                }
            )
        },
        toggleItem (index) {
            // 切换开关
            globalStore.commit(
                'toggleTodo',
                index
            )
        },
        removeItem (index) {
            // 删除项目
            globalStore.commit(
                'removeTodo',
                index
            )
        }
    }
}
</script>

<style scoped>

</style>


