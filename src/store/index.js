import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pop: 0,
    new: 0,
    sell: 0,
    currentType: ['pop', 'new', 'sell'],
    cartList: [],
    allCount:0
  },
  mutations: {
    addCount(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      context.state.allCount++
      let oldProduct = null
      // console.log(state);
      
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      if (oldProduct) {
        oldProduct.count++
        // context.commit('addCount',oldProduct)
      } else {
        payload.count = 1
        payload.checked = false
        context.state.cartList.push(payload)
        // context.commit('addToCart',payload)
      }

    }
  },
  modules: {
  }
})
