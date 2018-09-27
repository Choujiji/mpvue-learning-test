import Vue from 'vue'
import App from './index2'
import mpvueToastRegistry from 'mptoast/registry'

// 注册弹出组件
mpvueToastRegistry(Vue)

const app = new Vue(App)
app.$mount()
