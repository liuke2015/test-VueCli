import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state={
  count:0
}

const mutations={
  plus(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  }
}

export default new Vuex.Store({
  state,
  mutations,
})
