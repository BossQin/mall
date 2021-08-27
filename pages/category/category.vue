<template>
	<view class="content">
		<van-sidebar>
			<van-sidebar-item v-for="(item,index) in categories" :title='item.title' :key="index"
				:active-key="activeKey" @click='sidebarItemClick' />
		</van-sidebar>
		<scroll-view scroll-y="true" class="view">
			<view>
				<van-grid column-num="3">
					<van-grid-item use-slot v-for="(item,index) in showSubcategory.list" :key="index">
						<a :href="item.link">
						<image style=" width: 100%; height: 85px;" :src="item.image" />
						<text class="text">{{item.title}}</text>
						</a>
					</van-grid-item>
				</van-grid>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				activeKey: 0,
				categories: [],
				categoryData: {},
				currentIndex: -1
			}
		},
		onLoad() {
			this.getcategory()
		},
		computed: {
			showSubcategory() {
				if (this.currentIndex === -1) return {}
				return this.categoryData[this.currentIndex].subcategories
			}
		},
		methods: {
			sidebarItemClick(index) {
				// console.log(index.detail)
				this._getSubcategories(index.detail)
			},
			async getcategory() {
				const res = await this.$myRequest({
					url: '/category'
				})
				// console.log(res)
				// 1.获取分类数据
				this.categories = res.data.category.list
				// 2.初始化每个类别的子数据
				for (let i = 0; i < this.categories.length; i++) {
					this.categoryData[i] = {
						subcategories: {}
					}
				}
				this._getSubcategories(0)
			},
			async _getSubcategories(index) {
				this.currentIndex = index
				const maitKey = this.categories[index].maitKey
				const res = await this.$myRequest({
					url: "/subcategory",
					data: {
						maitKey
					}
				})
				this.categoryData[index].subcategories = res.data
				this.categoryData = {
					...this.categoryData
				}
			}
		}
	}
</script>

<style scoped>
	.text{
		padding-top: 15px;
	}
	.view {
		position: fixed;
		left: 80px;
		/* #ifdef H5 */
		top: 44px;
		/* 适配h5 */
		/* #endif */
		/* #ifndef H5 */
		top: 0;
		/* 适配其他平台*/
		/* #endif */
		
		/* #ifdef H5 */
		width: 334.4px;
		/* 适配h5 */
		/* #endif */
		/* #ifndef H5 */
		width: 295.2px;
		/* 适配其他平台*/
		/* #endif */
		
		
		/* height: 718px; */
		/* #ifdef H5 */
		height: calc(100vh - 44px - 50px);
		/* 适配h5 */
		/* #endif */
		/* #ifndef H5 */
		height: 100%;
		/* 适配其他平台*/
		/* #endif */
	}
	.custom-class{
		width: 295.2px;
	}
</style>
