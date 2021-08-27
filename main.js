import Vue from 'vue'
import App from './App'
import {myRequest} from './utils/api.js'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest //在vue原型上添加方法，使之全局都能调用
Vue.prototype.$bus = new Vue()
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
