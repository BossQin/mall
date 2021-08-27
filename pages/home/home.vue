<template>
	<view class="content">
		<swiper class="swiper" :circular="true" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item v-for="(item,index) in banners" :key="index">
				<a :href="item.link">
					<image :src="item.image" mode="widthFix" />
				</a>
			</swiper-item>
		</swiper>
		<RecommendView :recommend="recommend"></RecommendView>
		<FeatureView />
		<view class="tab-control">
			<TabControl :title="['流行','新款','精选']" @tabclick="tabclick"></TabControl>
		</view>
		<GoodsList :goodsList="showGoods"></GoodsList>
		<BackTop v-if="isTop" />
	</view>
</template>

<script>
	// 组件引入
	import RecommendView from './ChildComponent/RecommendView.vue'
	import FeatureView from './ChildComponent/FeatureView.vue'
	import TabControl from '../../components/content/TabControl/TabControl.vue'
	import GoodsList from '../../components/content/Goods/GoodsList.vue'
	import BackTop from '../../components/content/BackTop/BackTop.vue'

	// 方法引入

	export default {
		components: {
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			BackTop
		},
		data() {
			return {
				banners: [],
				recommend: [],
				goods: {
					"pop": {
						page: 0,
						list: []
					},
					"new": {
						page: 0,
						list: []
					},
					"sell": {
						page: 0,
						list: []
					}
				},
				currnentType: 'pop',
				isTop: false
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currnentType].list
			}
		},
		onLoad() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		onReachBottom() { //上拉加载更多
			this.getHomeGoods(this.currnentType)
		},
		onPageScroll(e) { //监听页面滚动，该函数只能放在页面上，不能写在回到顶部按钮组件内部，否则不起作用
			// console.log(e.scrollTop)
			this.isTop = e.scrollTop > 1000
		},
		methods: {
			// 网络请求相关
			async getHomeMultidata() { //获取主页轮播图	
				const res = await this.$myRequest({
					url: '/home/multidata'
				})
				// console.log(res)
				this.banners = res.data.banner.list
				this.recommend = res.data.recommend.list
			},
			async getHomeGoods(type) { //获取主页推荐数据
				const page = this.goods[type].page + 1
				const res = await this.$myRequest({
					url: '/home/data',
					data: {
						type,
						page
					}
				})
				// console.log(res)
				this.goods[type].list.push(...res.data.list)
				this.goods[type].page += 1
			},

			// 事件监听相关
			tabclick(index) {
				switch (index) {
					case 0:
						this.currnentType = 'pop'
						break
					case 1:
						this.currnentType = 'new'
						break
					case 2:
						this.currnentType = 'sell'
				}
			}
		}
	}
</script>

<style scoped>
	.swiper {
		height: 390rpx;
	}

	.swiper image {
		width: 100%;
	}

	.tab-control {
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
		margin-top: -0.0625rem;
		z-index: 10;
		background-color: #FFFFFF;
	}
</style>
