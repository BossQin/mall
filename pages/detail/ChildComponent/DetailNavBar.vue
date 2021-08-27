<template>
	<view>
		<NavBar class="navbar" >
			<view slot='center' class="title">
				<view v-for="(item,index) in title" :key="index" class="item" :class="{active:currentIndex===index}" @click="navclick(index)">
				{{item}}</view>
			</view>
		</NavBar>
	</view>
</template>

<script>
	import NavBar from '../../../components/common/NavBar.vue'
	export default {
		name: 'DetailNavBar',
		components: {
			NavBar
		},
		data() {
			return {
				currentIndex: 0,
				title: ["商品", "参数", "评论", "推荐"]
			}
		},
		methods:{
			navclick(index){
				this.currentIndex = index
				this.$emit('titleClick',index)
			}
		}
	}
</script>

<style scoped>
  .navbar{
    position: relative;
    background-color: #FFFFFF;
    color: #666;
  }
  .active {
    color: var(--color-tint);
  }

  .title {
    display: flex;
  }

  .title .item {
    flex: 1;
    font-size: 0.875rem;
  }
</style>
