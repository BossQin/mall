<template>
  <view class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <view class="info-size" v-for="(table,index) in paramInfo.sizes" :key="index">
    <view class="tr" v-for="(tr,indey) in table" :key="indey">
      <view class="td" v-for="(td,indez) in tr" :key="indez">{{td}}</view>
    </view>
    </view>
    <view class="info-param">
      <view class="tr" v-for="(info,index) in paramInfo.infos" :key="index">
        <view class="info-param-key td">{{info.key}}</view>
        <view class="param-value td">{{info.value}}</view>
      </view>
    </view>
    <view class="info-img" v-if="paramInfo.image.length !==0">
      <image :src="paramInfo.image" alt="" mode="widthFix" class="image">
    </view>
  </view>
</template>

<script>
export default {
  name:'DetailParamInfo',
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-size,.info-param {
    width: 100%;
    border-collapse: collapse;
		padding-top: 40rpx;
  }
	.info-param{
		padding-top: 40rpx;
	}

  .tr {
    height: 42px;
		display: flex;
		justify-content: space-between;
  }

  .info-size {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .image {
    width: 100%;
  }
</style>
