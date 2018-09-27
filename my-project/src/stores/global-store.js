import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        count: 0,
        todoList: wx.getStorageSync('todos') || []
    },
    mutations: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        addTodo: (
            state, 
            todo = {
               name: '',
               completed: false 
            }
        ) => {
            state.todoList.push({
                name: todo.name,
                completed: todo.completed
            })
            wx.setStorageSync('todos', state.todoList)
            console.log(state.todoList)
        },
        toggleTodo: (state, index) => {
            const item = state.todoList[index]
            item.completed = !item.completed
            wx.setStorageSync('todos', state.todoList)            
            console.log(state.todoList)
        },
        removeTodo: (state, index) => {
            state.todoList.splice(index, 1)
            wx.setStorageSync('todos', state.todoList)
            console.log(state.todoList)
        }
    }
})