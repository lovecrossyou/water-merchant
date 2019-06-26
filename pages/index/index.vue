<template>
	<view class="home_warpper">
		<view class="header">
			<view class="open_shop">
				<view>您还没有开通店铺</view>
				<view class="open_shop_btn">立即开店</view>
			</view>
			<view class="category">
				<view class="category_item">
					<view class="col_red">0</view>
					<view class="col_gray">全部商品</view>
				</view>
				<view class="category_item">
					<view class="col_red">0</view>
					<view class="col_gray">全部商品</view>
				</view>
				<view class="category_item">
					<view class="col_red">0</view>
					<view class="col_gray">全部商品</view>
				</view>
			</view>
		</view>
		<view class="commodity_category">
			<view class="category_item" v-for="i in 6" key='i'>
				<img :src="jinmu" alt="">
				<view class="col_gray">店铺管理</view>
			</view>
		</view>
		<view class="sale_container">
			<view class="sale_order">
				<img :src="jinmu" alt="">
				<view>销售订单</view>
				
			</view>
			<view class="order_state">
				<view class="category_item" v-for="i in 4" key='i'>
					<img :src="jinmu" alt="">
					<view class="col_gray">店铺管理</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jinmu:"../../static/index/jinmu.jpg"
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.home_warpper {
		width: 100%;
		height: 100%;
		position: absolute;
		left:0;
		top:0;
		background:#f1f1f3;
		font-size: 30upx;
		.col_red{
			color:#FF5255;
		}
		.col_gray{
			color:#666666;
		}
		.header {
			width: 100%;
			background:#FFFFFF;
			margin-bottom:20upx;
			.open_shop {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 200upx;
				background: #FE6350;
				color: #fff;
				// opacity: 0.8;
				.open_shop_btn {
					margin-top: 22upx;
					width: 181upx;
					height: 52upx;
					line-height: 52upx;
					text-align: center;
					border: 1upx solid white;
					border-radius: 25upx;
				}
			}
			.category {
				width:100%;
				height: 114upx;
				display: flex;
				font-size: 26upx;
				border-bottom:1upx solid #DEDEDE;
				.category_item {
					flex-basis:33.33%;
					// border-right: 1upx solid #DEDEDE;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.commodity_category{
			width: 100%;
			border-top:1upx solid #DEDEDE;
			border-bottom:1upx solid #DEDEDE;
			background:#FFFFFF;
			margin-bottom:20upx;
			display: flex;
			flex-wrap: wrap;
			.category_item {
				flex-basis:33.33%;
				height:168upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img{
					width:54upx;
					height:48upx;
					margin-bottom:20upx;
				}
			}
		}
		.sale_container{
			width: 100%;
			border-top:1upx solid #DEDEDE;
			border-bottom:1upx solid #DEDEDE;
			background:#FFFFFF;
			margin-bottom:20upx;
			.sale_order{
				height: 80upx;
				line-height: 80upx;
				display: flex;
				align-items: center;
				border-bottom:1upx solid #DEDEDE;
				img{
					width:30upx;
					height:32upx;
					margin-left:26upx;
					margin-right:20upx;
				}
				
			}
			.order_state{
				width:100%;
				height:140upx;
				display: flex;
				.category_item{
					flex:1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					img{
						width:36upx;
						height:30upx;
						margin-bottom:20upx;
					}
				}
			}
		}
		
		
		
		
	}
</style>
