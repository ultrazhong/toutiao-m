import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*
加载 vant 组件库
 */
import Vant from 'vant'
/*
加载 vant 组件库样式
 */
import 'vant/lib/index.css'
/*
自动设置REM基准值（HTML标签字体大小）
 */
import 'amfe-flexible'
/*
加载全局样式，最好放在最后以覆盖第三方样式
 */
import './styles/index.less'
/* 全局注册 vant 中的组件  */
Vue.use(Vant)
Vue.config.productionTip = false

/* 创建 vue 根实例  */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
