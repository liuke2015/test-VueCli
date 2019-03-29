import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const state = {
  count: 0
};
/*mutations是同步的*/
const mutations = {
  plus(state, obj = {stemp: 1}) {
    state.count += obj.stemp;
    /*state.count++;*/
  },
  reduce(state) {
    state.count--;
  }
};
/*getters-计算属性
* 注：vue2.0的computed不要使用箭头函数
* */
const getters = {
  gCount(state) {
    return state.count + 100;
  }
};
/*actions是异步执行*/
const actions = {
  /*context:代表整个store*/
  actPlus(context) {
    context.commit("plus", {stemp: 1})
    setTimeout(()=>{
      context.commit("reduce");
    },3000);
    console.log("我先执行了~~~")
  },
  actReduce(context){
    context.commit("reduce");
  }
};


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
