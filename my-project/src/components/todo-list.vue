<template>
    <div class="container">
        <h3>{{ title }}</h3>
        <div>
            <!-- 输入框 -->
            <div class="input_info">
                <input
                    class="input"
                    type="text"
                    v-model="value"
                    placeholder="请输入" 
                />
                <div 
                    class="button"
                    @click="handleClick"
                >
                    Add
                </div>
            </div>
            <!-- 显示列表 -->
            <ul>
                <li
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <span
                        class="item"
                        :class="{ done: item.completed }"
                        @click="handleToggle(index)"
                    >
                        {{ index + 1 }}、{{ item.name }}
                    </span>
                    <div 
                        class="button"
                        @click.prevent="handleRemove(index)"
                    >
                        remove
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'title'
            },
            items: {
                type: Array,
                default: []
            }
        },
        data () {
            return {
               value: '' 
            }
        },
        methods: {
            handleClick () {
                if (!this.value.length) {
                    return
                }
                this.$emit('addTodo', this.value)
            },
            handleToggle (index) {
                this.$emit('toggleItem', index)
            },
            handleRemove (index) {
                this.$emit('removeItem', index)
            }
        }
    }
</script>

<style scoped>
    .input_info {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .done {
        color: red;
        text-decoration: line-through;
    }
    .item {
        font-size: 40rpx;
        line-height: 100rpx;
        display: inline-block;
        height: 100rpx;
        width: 550rpx;
    }
    .button {
        width: 160rpx;
        display: inline-block;
        height: 70rpx;
        font-size: 40rpx;
        background: #ccc;
        border-radius: 20rpx;
        text-align: center;
    }
    .input {
        display: inline-block;
        padding: 0 12px;
        margin-bottom: 5px;
        border: 1px solid #ccc
    }
</style>

