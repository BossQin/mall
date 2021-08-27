<template>
	<view id="profile">
		<UserInfo></UserInfo>
		<section class="account">
			<view class="account-item">
				<view class="number">
					<span class="balance">0.00</span>元
				</view>
				<view class="account-info">我的余额</view>
			</view>

			<view class="account-item">
				<view class="number">
					<span class="balance">0</span>个
				</view>
				<view class="account-info">我的优惠</view>
			</view>

			<view class="account-item">
				<view class="number">
					<span class="balance">0</span>分
				</view>
				<view class="account-info">我的积分</view>
			</view>
		</section>

		<list-view :list-data="orderList" class="order-list"></list-view>

	</view>
</template>

<script>
	import UserInfo from './ChildComponent/UserInfo.vue'
	import ListView from './ChildComponent/ListView.vue'
	export default {
		name: "Profile",
		components: {
			UserInfo,
			ListView
		},
		data() {
			return {
				orderList: [{
						icon: '#order',
						iconColor: "#00DCD1",
						info: '我的消息'
					},
					{
						icon: '#point',
						iconColor: '#fc7b53',
						info: '积分商城'
					},
					{
						icon: '#vip',
						iconColor: '#ffc636',
						info: '会员卡'
					},
				],
			}
		}
	}
</script>

<style scoped>
	#profile {
		background-color: #f2f2f2;
	}

	.nav-bar {
		background-color: var(--color-tint);
		font-weight: 700;
		color: #fff;
	}

	.account {
		display: flex;
	}

	.account-item {
		width: 100%;
		background-color: #fff;
		margin-right: 1px;
		text-align: center;
	}

	.account-item:last-of-type {
		margin-right: 0;
	}

	.account-item {
		color: #666;
		font-size: 13px;
		padding: 18px;
	}

	.account-item .balance {
		font-size: 24px;
		font-weight: 700;
		color: #ff5f3e;
	}

	.account-info {
		margin-top: 6px;
	}

	.order-list,
	.service-list {
		margin-top: 12px;
	}
</style>
