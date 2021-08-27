<template>
	<view class="content">
		<cartListItem v-for="(item,index) in cartList" :key="index" :product="item" />
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import cartListItem from './cartListItem.vue'
export default {
  name:'cartList',
	components:{
		cartListItem
	},
	computed:{
		...mapGetters(['cartList'])
	}
}
</script>

<style scoped>
	.content{
		padding-bottom: 80rpx;
	}
</style>
