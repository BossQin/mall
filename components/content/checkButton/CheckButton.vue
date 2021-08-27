<template>
	<view class="check-button" :class="{check:ischecked}">
		<image src="../../../static/img/common/tick.svg" alt="" mode="widthFix" class="image">
	</view>
</template>

<script>
	export default {
		name: 'CheckButton',
		props: {
			ischecked: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	.check-button {
		border-radius: 50%;
		border: 4rpx solid #aaa;
	}

	.image {
		width: 30rpx;
		height: 30rpx;
	}

	.check {
		background-color: #00dcd1;
		border-color: #00dcd1;
	}
</style>
