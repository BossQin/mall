<template>
	<view class="content">
		<cartList/>
		<bottomBar class="bottomBar"/>
	</view>
</template>

<script>
	import cartList from './ChildComponent/cartList.vue'
	import bottomBar from './ChildComponent/BottomBar.vue'
	export default {
		components:{
			cartList,
			bottomBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.bottomBar{
		/* #ifdef H5 */
		bottom: 50px;
		/* 适配h5 */
		/* #endif */
		/* #ifndef H5 */
		bottom: 0;
		/* 适配其他平台*/
		/* #endif */
	}
</style>
