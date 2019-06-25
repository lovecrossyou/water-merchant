<template>
	<view class="content">
		<button class="title">入驻</button>
		
		<button class="title">全部商品</button>
		
		<button class="title">店铺管理</button>
		
		<button class="title" @click="productMgt">商品管理</button>
		
		
		<button class="title">促销管理</button>
		
		<button class="title">市场推广</button>
		
		<button class="title">客户管理</button>
		
		
		<button class="title">销售业绩</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello world'
			}
		},
		onLoad() {

		},
		methods: {
            productMgt(){
				uni.navigateTo({
					url: '../product/product'
				});
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		width: 100%;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #fff;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		margin: 10upx ;
		background: #007AFF;
		
	}
</style>
