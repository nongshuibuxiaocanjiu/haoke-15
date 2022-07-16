import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)
const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY),
    list: {}
  },
  getters: {},
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(TOKEN_KEY, state.user)

      // window.localStorage.setItem('TOKEN_KEY', JSON.stringify(state.user))
    },
    getList (state, val) {
      state.list = val
    }
  },
  actions: {},
  modules: {}
})
