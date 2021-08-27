<template>
	<view class="content">
		<view class="box1 tab_item0" ref="tab_item0">
			<view class="Detail-nav-bar">
				<DetailNaveBar @titleClick="titleClick" ref="navbar" />
			</view>
			<swiper class="swiper" :autoplay="true" :interval="3000" :duration="500" :circular="true">
				<swiper-item v-for="(item,index) in topImages" :key="index">
					<a :href="item">
						<image :src="item" mode="widthFix" />
					</a>
				</swiper-item>
			</swiper>
			<!-- 商品基本信息 -->
			<DetailBassInfo :goods="goods" />
			<!-- 商家信息 -->
			<DetailShopInfo :shop="shop" />
			<!-- 商品展示图 -->
			<DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" />
			<!-- 商品参数 -->
			<DetailParamInfo :paramInfo="paramInfo" class="tab_item1" ref="tab_item1" />
			<!-- 商品评论 -->
			<DetailCommentInfo :commentInfo="commentInfo" class="tab_item2" ref="tab_item2" />
			<!-- 商品推荐 -->
			<GoodsList :goodsList="recommendList" class="tab_item3" ref="tab_item3" />
		</view>
		<!-- <view class="box2"> -->
		<!-- 底部商品导航栏 -->
		<GoodsNav class="box2" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" />
		<!-- </view> -->
		<BackTop v-if="isTop" />
	</view>
</template>

<script>
	// 组件引用
	import DetailNaveBar from './ChildComponent/DetailNavBar.vue'
	import DetailBassInfo from './ChildComponent/DetailBassInfo.vue'
	import DetailShopInfo from './ChildComponent/DetailShopInfo.vue'
	import DetailGoodsInfo from './ChildComponent/DetailGoodsInfo.vue'
	import DetailParamInfo from './ChildComponent/DetailParamInfo.vue'
	import DetailCommentInfo from './ChildComponent/DetailCommentInfo.vue'
	import GoodsNav from '../../components/uni-goods-nav/uni-goods-nav.vue'
	import GoodsList from '../../components/content/Goods/GoodsList.vue'
	import BackTop from '../../components/content/BackTop/BackTop.vue'

	// 工具引用
	import {
		Goods,
		Shop,
		GoodsParam
	} from '../../utils/api.js'
	
	// 引入映射
	import { mapActions } from 'vuex'

	export default {
		name: 'detail',
		components: {
			DetailNaveBar,
			DetailBassInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			GoodsList,
			BackTop,
			GoodsNav
		},
		data() {
			return {
				iid: null,
				topImages: [],
				goods: {},
				shop: {},
				backTopIsShow: false,
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommendList: [],
				offsetTopY: [],
				currentIndex: 0,
				isTop: false,
				selectColor:false,
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'var(--color-tint)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		// 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
		onLoad(option) {
			// 获取当前商品iid
			this.iid = option.iid
			// 请求当前商品的数据
			this.getDtail(this.iid)
			// 获取详情页最后的推荐数据
			this.getRecommend()
		},
		onPageScroll(e) { //监听页面滚动，该函数只能放在页面上，不能写在回到顶部按钮组件内部，否则不起作用
			// console.log(e.scrollTop)
			this.isTop = e.scrollTop > 1000
			const positionY = e.scrollTop
			let length = this.offsetTopY.length
			for (let i = 0; i < length; i++) {
				if (this.currentIndex !== i && ((i < length - 1 && positionY > this.offsetTopY[i] && positionY < this
						.offsetTopY[i + 1]) || (i === length - 1 && positionY >= this.offsetTopY[i]))) {
					this.currentIndex = i
					// console.log(this.currentIndex)
					this.$refs.navbar.currentIndex = this.currentIndex
				}
			}
		},
		methods: {
			//1. 请求某商品数据
			async getDtail(iid) {
				const res = await this.$myRequest({
					url: '/detail',
					data: {
						iid
					}
				})
				// console.log(res.result)
				const data = res.result
				// 获取轮播图数据
				this.topImages = data.itemInfo.topImages
				// 获取商品基本信息
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				// 获取店铺信息
				this.shop = new Shop(data.shopInfo)
				// 获取商品详情数据
				this.detailInfo = data.detailInfo
				// 获取参数信息
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
				// 获取评论信息（有的没有）
				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0]
				}
			},
			// 2.请求最后的推荐数据
			async getRecommend() {
				const res = await this.$myRequest({
					url: '/recommend'
				})
				this.recommendList = res.data.list
			},

			// 事件函数
			titleClick(index) { //锚点跳转
				// #ifndef H5
				const query = uni.createSelectorQuery() //1.返回一个查询对象的实例
				query.select(".tab_item" + index).boundingClientRect() //2.在当前页面下查询指定选择器的节点，获取节点信息
				query.selectViewport().scrollOffset() //3.可用于获取显示区域的尺寸滚动位置等信息，然后添加节点的滚动位置的查询请求
				query.exec(res => { //开始执行
					if (res[0] && res[1]) { //res[0]是步骤2中的数据，res[1]是步骤3中的数据
						// console.log(res)
						uni.pageScrollTo({ //将页面滚动到指定位置
							duration: 300, //过渡时间
							scrollTop: res[0].top + res[1].scrollTop - 44, //计算值
						})
					}
				})
				// #endif
				// #ifdef H5
				uni.pageScrollTo({
					scrollTop: this.$refs['tab_item' + index].$el.offsetTop - 44,
					duration: 100
				})
				// #endif
			},
			imgLoad() {
				const query = uni.createSelectorQuery().in(this)
				this.offsetTopY = []
				this.offsetTopY.push(0)
				query.select('.tab_item1').boundingClientRect(data => {
					this.offsetTopY.push((data.top - 45))
				})
				query.select('.tab_item2').boundingClientRect(data => {
					this.offsetTopY.push((data.top - 45))
				})
				query.select('.tab_item3').boundingClientRect(data => {
					this.offsetTopY.push((data.top - 45))
				}).exec()
				// console.log(this.offsetTopY)
			},
			onClick(e) {
				switch (e.index) {
					case 2:
					uni.switchTab({
						url: "/pages/cart/cart"
					})
					break
				default:
					uni.showToast({
						title: `点击${e.content.text}`,
						icon: 'none'
					})
				}
			},
			...mapActions(['addCart']),
			buttonClick(e) {
				if (e.index == 0) {//"添加购物车"按钮点击
					// 获取购物车需要展示的信息
					const product = {}
					product.image = this.topImages[0]
					product.title = this.goods.title
					product.desc = this.goods.desc
					product.price = this.goods.realPrice
					product.iid = this.iid

					// 将商品添加到购物车后弹出成功窗口
					// 方法一常规调用：
					// this.$store.dispatch('addCart', product).then(res => {
					// 	uni.showToast({
					// 		title: res
					// 	})
					// })
					// 方法二映射调用:
					this.addCart(product).then(res => {
					  uni.showToast({
					  	title:res
					  })
					})
				} else {//"立即购买"按钮点击
					uni.showToast({
						title: '正在跳转'
					})
				}
			},
		}
	}
</script>

<style>
	.box1 {
		/* #ifdef H5  */
		padding-bottom: 100rpx;
		/* #endif */
		/* #ifndef H5 */
		padding-bottom: 168rpx;
		/* #endif */
		/* padding-bottom: 100rpx; */
	}

	.Detail-nav-bar {
		/* 吸顶效果不同平台需要设置不同距离 */
		position: sticky;
		/* #ifdef H5 */
		top: 44px;
		/* 适配H5*/
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* 适配其他平台*/
		/* #endif */
		z-index: 10;
		background-color: #FFFFFF;
	}

	.swiper {
		height: 600rpx;
	}

	.swiper image {
		width: 100%;
	}

	.box2 {
		position: fixed;
		width: 100%;
		bottom: 0;
		background-color: #ffffff;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
</style>
