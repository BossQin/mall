import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutations-types.js'


export default {
	// 如果购物车中已有该商品，则计数+1
    [ADD_COUNTER](state,payload){
      payload.count++
    },
		// 如果购物车中没有该商品，则添加商品
    [ADD_TO_CART](state,payload){      
      payload.checked = true
      state.cartList.push(payload)
    },
		//购物车页面减少商品数量
		minusCounter(state,payload) {
			let oldProduct = state.cartList.find(item => item.iid === payload.iid)
			if (oldProduct){
				oldProduct.count = payload.count
			}
		},
		changeCheck(state,payload) {//修改复选框按钮
			let oldProduct = state.cartList.find(item => item.iid === payload.iid)
			if (oldProduct) {
				oldProduct.checked = payload.checked
			}
		}
  }
