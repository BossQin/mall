<template>
	<view class="tab-control">
		<view v-for="(item,index) in title" 
		class="tabcontrol-item"
		:class="{active:index===cunrrentIndex}"
		@click="tabcontrolclick(index)"
		:key="index">
			<span>{{item}}</span>
		</view>
	</view>
</template>

<script>
export default {
  name:'TabControl',
	data(){
		return {
			cunrrentIndex:0
		}
	},
	props:{
		title:{
			type:Array,
			default(){
				return []
			}
		}
	},
	methods:{
		tabcontrolclick(index){
			this.cunrrentIndex=index
			this.$emit('tabclick',index)
		}
	}
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    font-size: 0.9375rem;
  }
/*  .tab-control span{
    padding: 0.3125rem;
  } */
  .tabcontrol-item {
    flex: 1;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
  }

  .active {
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>
