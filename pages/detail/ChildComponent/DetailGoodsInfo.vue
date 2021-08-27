<template>
  <view v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <view class="info-desc clear-fix">
      <view class="start">
      </view>
      <view class="desc">{{detailInfo.desc}}</view>
      <view class="end"></view>
    </view>
    <view class="info-key">{{detailInfo.detailImage[0].key}}</view>
    <view class="info-list" >
      <image class="image" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" mode="widthFix" @load="imageload">
    </view>
  </view>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
       counter:0,
       imagesLength:0
    }
  },
  watch:{
    // 监控父组件传进来的数据中图片数组的长度
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  },
	methods:{
		imageload(){
		  //条件判断是为了避免重复发出时间给父组件，提高性能
		  if (++this.counter === this.imagesLength){
		    this.$emit('imgLoad')
		  }
		}
	}
}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .image {
    width: 100%;
  }
</style>
