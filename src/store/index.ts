import Vue from 'vue'
import Vuex from 'vuex'
import { ICategory } from '@/types/ICategory'
import Axios from 'axios'
import { ITodo } from '@/types/ITodo'
import { IPriority } from '@/types/IPriority'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    updateToken (state, token) {
      Vue.set(state, 'token', token)
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    token: state => state.token,
  }
})
