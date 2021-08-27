<template>
	<view class="goodsList">
		<GoodsListItem v-for="(item,index) in goodsList" :goodsItem="item" :key="index" />
	</view>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
export default {
  name:'GoodsList',
	props:{
		goodsList:{
			type:Array,
			default(){
				return []
			}
		}
	},
	components:{
		GoodsListItem
	},
}
</script>

<style scoped>
.goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; 
  }

</style>
