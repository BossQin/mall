<template>
	<view class="bottom-bar">
		<view class="check-content">
			<checkbox class="check-button" @click.native="allSelect" :checked="isAllSelect" />
			<text>全选</text>
			</view>
			<view class="price">
				合计:￥{{totalprice}}
			</view>
			<view class="calulate" @click="payclick">
				去付款:({{getlength}})
			</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
export default {
  name:'BottomBar',
	components:{
		
	},
	computed:{
		...mapGetters(['cartList']),
		totalprice() {
		  return this.cartList.filter(item => {
		    return item.checked
		  }).reduce((preValue, item) => {
		    return preValue + item.price * item.count
		  }, 0).toFixed(2)
		},
		getlength() {
		  // 获取勾选的商品数量
		  return this.cartList.filter(item => item.checked).length
		},
		isAllSelect() {
		  // 判断购物车内的商品是否有不勾选的，有则不全选
		  if (this.cartList.length === 0) return false
		  return !(this.cartList.find(item => !item.checked))
		}
	},
	methods:{
		allSelect() {
		  if (this.isAllSelect) { //全部选中的时候,点击按钮变为不全选
		    this.cartList.forEach(item => item.checked = false)
		  } else { //部分或全部不选中的时候,点击按钮变为全选
		    this.cartList.forEach(item => item.checked = true)
		  }
		},
		payclick() {
		  if (!(this.cartList.filter(item => item.checked).length)) {
		    uni.showToast({
		    	title:'请选择要购买的商品'
		    })
		  } else {
		    uni.showToast({
		    	title:'正在跳转，请稍等'
		    })
		  }
		}
	}
}
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    width: 100%;
    background-color: #eee;
    position: fixed;
		/* #ifdef H5 */
    bottom: 100rpx;
		/* #endif */
		/* #ifndef H5 */
		bottom: 0;
		/* #endif */
    line-height: 80rpx;
  }

  .check-content {
    display: flex;
    align-items: center;
    text-align: center;
		line-height: 80rpx;
  }

  .check-button {
    width: 40rpx;
    height: 40rpx;
    line-height: 40rpx;
    margin-right: 20rpx;
    margin-left: 20rpx;
  }

  .price {
    line-height: 80rpx;
    flex: 1;
    text-align: center;
  }

  .calulate {
    line-height: 80rpx;
    background-color: #ffa200;
    width: 180rpx;
    text-align: center;
  }
</style>
