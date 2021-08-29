<template>
	<view id="user-info">
		<view class="clear-fix">
			<slot name="user-icon">
				<svg class="privateImage-svg left">

				</svg>
			</slot>
			<view class="login-info left">
				<slot name="user-nickname">
					<view>登录/注册</view>
				</slot>
				<view class="phone">
					<span>

					</span>
					<slot name="user-phone">暂无绑定手机号</slot>
				</view>
			</view>
			<svg data-v-735ff1be="" fill="#fff" class="arrow-svg right">
				<use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
			</svg>
		</view>
	</view>
</template>

<script>
	export default {
		name: "UserInfo"
	}
</script>

<style scoped>
	#user-info {
		background-color: var(--color-tint);
		padding: 15px;
		margin-top: -5px;
	}

	.clear-fix {
		/* #ifndef H5 */
		height: 90px;
		background-color: #00DCD1;

		/* 适配其他平台*/
		/* #endif */
	}

	.privateImage-svg {
		width: 60px;
		height: 60px;
		background-color: #fff;
		border-radius: 30px;
	}

	.left {
		float: left;
	}

	.arrow-svg {
		width: 11px;
		height: 22px;
		margin-top: 18px;
	}

	.login-info {
		color: #fff;
		margin: 10px 0 0 10px;
	}

	.phone {
		position: relative;

		font-size: 13px;
		margin-top: 5px;
		margin-left: 15px;
		font-weight: 300;
	}

	.login-info .phone .icon-mobile {
		position: absolute;
		width: 12px;
		height: 18px;
		left: -15px;
		top: 0px;
	}

	/* #ifndef H5 */
	.clear-fix {
		height: 90px;
		background-color: #00DCD1;
	}

	.privateImage-svg {
		width: 60px;
		height: 60px;
		background-color: #fff;
		border-radius: 30px;
		position: relative;
		left: 20px;
		top: 15px;
	}

	.login-info {
		color: #fff;
		margin: 10px 0 0 10px;
		position: relative;
		left: 30px;
		top: 15px;
	}

	/* 适配其他平台*/
	/* #endif */
</style>
