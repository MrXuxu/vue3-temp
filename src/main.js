import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 解决1px border问题和样式重置
import './assets/style/border.css'
import './assets/style/reset.css'

// 解决300ms延迟问题
import fastClick from "fastclick"
fastClick.attach(document.body)

// iconfont
import './assets/iconfont/TMall/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
