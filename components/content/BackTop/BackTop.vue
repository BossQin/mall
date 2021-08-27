<template>
	<view>
		<image v-if="image" src="../../../static/img/common/top.png" class="backTop" @click="backTopClick">
	</view>
</template>

<script>
	export default {
		name: 'BackTop',
		data(){
			return {
				image:"../../../assets/img/common/top.png"
			}
		},
		methods: {
			backTopClick() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			}
		}
	}
</script>

<style scoped>
	.backTop {
		position: fixed;
		right: 0.625rem;
		bottom: 8rem;
		width: 2.6875rem;
		height: 2.6875rem;
	}
</style>
