<template>
  <view class="shop-info">
    <view class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </view>
    <view class="shop-middle">
      <view class="shop-middle-item shop-middle-left">
        <view class="info-sells">
          <view class="sells-count">
            {{shop.sells | sellCountFilter}}
          </view>
          <view class="sells-text">总销量</view>
        </view>
        <view class="info-goods">
          <view class="goods-count">
          {{shop.goodsCount}}
          </view>
          <view class="goods-text">全部宝贝</view>
        </view>
      </view>
      <view class="shop-middle-item shop-middle-right">
        <view class="table">
          <view class="tr" v-for="(item,index) in shop.score" :key="index">
            <view class="td">{{item.name}}</view>
            <view class="score td" :class="{'score-better': item.isBetter}">{{item.score}}</view>
            <view class="better td" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></view>
          </view>
        </view>
      </view>
    </view>
    <view class="shop-bottom">
      <view class="enter-shop">进店逛逛</view>
    </view>
  </view>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:Object,
    default(){
      return {}
    }
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 50rpx 16rpx;
    border-bottom: 10rpx solid #f2f5f8;
  }

  .shop-top {
    line-height: 90rpx;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 90rpx;
    height: 90rpx;
    border-radius: 50%;
    border: 2rpx solid rgba(0,0,0,.1);
  }

  .shop-top .title {
    margin-left: 20rpx;
    vertical-align: center;
  }

  .shop-middle {
    margin-top: 30rpx;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 2rpx solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 36rpx;
  }

  .sells-text, .goods-text {
    margin-top: 20rpx;
    font-size: 24rpx;
  }

  .shop-middle-right {
    font-size: 26rpx;
    color: #333;
  }

  .table {
    width: 240rpx;
    margin-left: 60rpx;
  }

 .table .tr {
    padding: 10rpx 0;
		display: flex;
		justify-content:space-between;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 20rpx;
  }

  .enter-shop {
    display: inline-block;
    font-size: 28rpx;
    background-color: #f2f5f8;
    width: 300rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    border-radius: 20rpx;
  }
</style>
