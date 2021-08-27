<template>
  <view v-if="Object.keys(goods).length !== 0" class="base-info">
    <view class="info-title">{{goods.title}}</view>
    <view class="info-price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </view>
    <view class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </view>
    <!-- <view class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </view> -->
  </view>
</template>

<script>
export default {
  name:'DetailBassInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}	
</script>

<style scoped>
  .base-info {
    margin-top: 30rpx;
    padding: 0 16rpx;
    color: #999;
    border-bottom: 10rpx solid #f2f5f8;
  }

  .info-title {
    color: #222
  }

  .info-price {
    margin-top: 20rpx;
  }

  .info-price .n-price {
    font-size: 48rpx;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 26rpx;
    margin-left: 10rpx;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 24rpx;
    padding: 4rpx 10rpx;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 16rpx;
    margin-left: 10rpx;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -16rpx;
  }

  .info-other {
    margin-top: 30rpx;
    line-height: 60rpx;
    display: flex;
    font-size: 26rpx;
    border-bottom: 2rpx solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 120rpx;
  }

  .info-service-item img {
    width: 28rpx;
    height: 28rpx;
    position: relative;
    top: 4rpx;
  }

  .info-service-item span {
    font-size: 26rpx;
    color: #333;
  }
</style>
