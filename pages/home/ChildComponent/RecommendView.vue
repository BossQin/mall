<template>
	<view class="recommend">
		<view v-for="(item,index) in recommend" :key="index" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<view>{{item.title}}</view>
			</a>
		</view>
	</view>
</template>

<script>
export default {
  name:'RecommendView',
	props:{
		recommend:{
			type:Array,
			default () {
				return []
			}
		}
	}
}
</script>

<style scoped>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 1.125rem;
		padding: 1.125rem 0;
		border-bottom: 0.5rem solid #eee;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend img{
		height: 5rem;
		width: 5rem;
		margin-bottom: 0.625rem;
	}
</style>
