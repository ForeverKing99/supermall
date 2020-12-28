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
        return new Promise((resolve,reject)=>{
        context.state.allCount++
        let oldProduct = null
        
        for (let item of context.state.cartList) {
          if (item.iid === payload.iid) {
            oldProduct = item
          }
        }
        if (oldProduct) {
          oldProduct.count++
          resolve('当前商品+1')
        } else {
          payload.count = 1
          payload.checked = true
          context.state.cartList.push(payload)
          resolve('添加了新的商品')
        }
    })  
  },
},
  modules: {
  }
})
