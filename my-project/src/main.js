import Vue from 'vue'
import App from './App'
import { post, get, getRequest } from './utils/requestMethod.js'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MpvueRouterPatch)

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$getRequest = getRequest

const app = new Vue(App)
app.$mount()
