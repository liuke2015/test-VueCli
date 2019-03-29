import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state={
  count:0
}

const mutations={
  plus(state,obj={stemp:1}){
    state.count+=obj.stemp;
    /*state.count++;*/
  },
  reduce(state){
    state.count--;
  }
}

export default new Vuex.Store({
  state,
  mutations,
})
