<template>
  <view class="shop-item">
   <view class="item-selector">
      <checkbox class="checkbox" :checked="product.checked" @click.native='checked'/>
    </view>
    <view class="total-info" @click="itemclick">
      <view class="item-img">
        <image class="image" :src="product.image" alt="商品图片">
      </view>
      <view class="item-info">
        <view class="item-title">{{product.title}}</view>
        <view class="item-desc">商品描述：{{product.desc}}</view>
        <view class="info-bottom">
          <view class="item-price left">￥{{product.price}}</view>
					<view class="item-count right">
						<numberBox class="numberBox" :min="1" :value="product.count" @minusclick="minusclick" @plusclick="plusclick" />
					</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
	import {mapActions,mapMutations} from 'vuex'
	import numberBox from '../../../components/uni-number-box/uni-number-box.vue'
export default {
  name:'cartListItem',
  components: {
		numberBox
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
		...mapActions(['addCart']),
		...mapMutations(['minusCounter','changeCheck']),
    checked(){
      this.product.checked = !this.product.checked //只写这句，只是修改了传进来的product里checked的值，没有修改vuex里的，所以H5生效，小程序不生效
			this.changeCheck(this.product)//需要加上此句在vuex里修改product里checked的值才能两平台生效
    },
    itemclick(){
			uni.navigateTo({
				url:'/pages/detail/detail?iid=' + this.product.iid
			})
    },
		minusclick(){//减少counter
			this.product.count--
			this.minusCounter(this.product)
		},
		plusclick(){//增加counter
			this.addCart(this.product)
		}
  }
}
</script>

<style scoped>
.shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
	.checkbox{
		border-radius: 50%;
	}

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 0.625rem;
  }

  .item-img {
    padding: 5px;
    /* border: 1px solid #ccc; */
  }

  .image {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .total-info {
    width: 100%;
    display: flex;
/*    padding: 10px; */
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding-right: 20px;
  }

  .info-bottom .item-price {
    color: orangered;
		line-height: 70rpx;
  }
	.item-count{
		margin-right: 20rpx;
	}
</style>
