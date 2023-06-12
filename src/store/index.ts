import { createStore } from 'vuex'
import home from './home/index'
export default createStore({
  // 局部模块
  modules: {
    home
  }
})