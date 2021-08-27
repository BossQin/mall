<template>
	<view class="goodslistitem" @click="itemclick">
		<image class="image" :src="showImage" alt="" :lazy-load="true">
			<view class="goods-info">
				<p>{{goodsItem.title}}</p>
				<text>价格:</text>
				<text class="price">{{goodsItem.price}}</text>
				<text class="collect">收藏:{{goodsItem.cfav}}</text>
			</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodsListItem',
		props: {
			goodsItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		computed: {
			showImage() {
				// 因为组件接收的数据存放位置名称不符合就会报错，所以要判断传来的数据存放位置名称
				return this.goodsItem.image || this.goodsItem.show.img
			}
		},
		methods: {
			itemclick() {
				// console.log(this.goodsItem)
				uni.navigateTo({
					url: '/pages/detail/detail?iid=' + this.goodsItem.iid
				})
			}
		}
	}
</script>

<style scoped>
	.goodslistitem {
		padding-bottom: 2.5rem;
		position: relative;
		width: 360rpx;

	}

	.image {
		width: 100%;
		border-radius: 0.3125rem;
	}

	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}

	.goods-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 0.1875rem;
	}

	.price {
		color: var(--color-high-text);
		margin-right: 1.25rem;
	}

	.collect {
		position: relative;
	}
</style>
