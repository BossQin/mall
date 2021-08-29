<template>
	<view id="list">
		<view v-for="(item, index) in listData" :key="index" class="item">
			<view class="icon">

			</view>
			<view class="info">{{item.info}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ListView",
		props: {
			listData: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	#list {
		background-color: #fff;
		font-size: 15px;
		color: #333;
	}

	#list .item {
		height: 44px;
		line-height: 44px;
		position: relative;
	}

	.icon svg {
		width: 18px;
		height: 18px;
	}

	.item .icon {
		margin-top: 10px;
		position: absolute;
		left: 16px;
		top: -7px;
	}

	.item .info {
		margin-left: 40px;
		border-bottom: 1px solid rgba(100, 100, 100, .1);
		padding-left: 5px;
	}

	.item:last-of-type .info {
		border-bottom: none;
	}

	/* #ifndef H5 */
	#list{
		margin-top: 10px;
	}
	.item{
		background-color: white;
	}
	.info{
		line-height: 45px;
	}
	/* 适配其他平台*/
	/* #endif */
</style>
