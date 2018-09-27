<template>
    <div class="container" @click="clickHandle">
        <div>我是首页</div>
        <!-- 测试弹窗 -->
        <mptoast />

        <button @click="showToast">弹窗测试</button>
        <div class="message">{{msg}}</div>
        <click-counter 
            :init-num="10"
            @clicknum="handleClickNum"
        >
            <input type="checkbox"/> 禁用
        </click-counter>
    </div>
</template>

<script>

import mptoast from 'mptoast'
import ClickCounter from '@/components/click-counter'

export default {
  data () {
    return {
      msg: 'Hello'
    }
  },

  components: {
    mptoast,
    ClickCounter
  },

  methods: {
    showToast () {
        this.$mptoast('我是弹窗欧耶~')
    },
    clickHandle () {
      this.msg = 'Clicked!!!!!'
    },
    handleClickNum (data) {
        console.log('>>>>>>>>>', data.num)
    }
  },

  created () {
  },

  async mounted() {
    try {
      const result = await this.$post(
        'member/login',
        {
          name: 'jiji'
        }
      )
      console.log('result = ', result)
    } catch (error) {
      console.log('error = ', error)
    }
    
  },
}
</script>

<style scoped>
    .message {
        color: red;
        padding: 10px;
        text-align: center;
    }
</style>
