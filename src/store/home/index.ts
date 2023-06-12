import { createStore } from 'vuex'
const home = createStore({
  state: {
      test: ''
  },
  mutations: {
    updateTest(state, testValue) {
      state.test = testValue
    },
  }
})
export default home