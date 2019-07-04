<template>
	<view class="replenish_stock_wrapper">
		<img class="banner" :src="banner" alt="">
		<view class="tab_filtrate">
			<view class="tab_filtrate_list">
				<view v-bind:class="[selectedIndex==i?'activeClass':'initial']" v-for="(item,i) in navBarListTit" :key="i" @click='changeActive(i,item)'>
					<view>{{item}}</view>
				</view>
			</view>
		</view>
		<view class="product_list">
			<view class="product_item" v-for="(productItem,i) in productList" :key='i'>
				<img class="product" :src="productItem.imageUrl" alt="">
				<!-- <view v-if="productItem.type !== 'waterTicket'" class="product_intro"> -->
				<view class="product_intro">
					<view class="product_name">{{productItem.name}}</view>
					<view class="product_sell">
						<view class="product_price">￥{{productItem.productItemModels[0].currentPrice/100}}</view>
						<view class="activity">{{productItem.productItemModels[0].promotionActivityInfo}}</view>
						<view class="sold">已售：{{productItem.productItemModels[0].saleMount}}</view>
					</view>	
					<img class="shopping_cart" :src="icon_shopping_cart" alt="">
				</view>
			</view>
		</view>
	</view>		
</template>

<script>
	import dataUtil from '../../util/dataUtil';
	import {mapState} from 'vuex';
	
	export default {
		computed:{
			...mapState('replenishStock',['productList'])
		},
		data(){
			return {
				selectedIndex: 0,
				ascendBtn: true,
				descendBtn: true,
				priceascendBtn: true,
				pricedescendBtn: true,
				navBarListTit:['推荐','销量','价格','筛选'],
				banner:"../../static/replenishStock/banner.png",
				icon_shopping_cart:"../../static/replenishStock/icon_shopping_cart.png",
			}
		},
		methods: {
			changeActive(index, item) {
				this.selectedIndex = index;
			},
			async fetchOldproductList(){
				this.$store.dispatch('replenishStock/fetchOldproductList')
			}
		},
		onLoad(){
			this.fetchOldproductList()
		}
	}
</script>

<style lang="less">
	.cut_off{
		width:2upx;
		height:36upx;
		background:#DEDEDE;
	}
	.tab_filtrate {
		width: 100%;
		height:100upx;
		.tab_filtrate_list {
			width: 100%;
			height: 88upx;
			line-height: 88upx;
			border-bottom: 1upx solid #f5f5f5;
			background: #FFFFFF;
			font-size: 28upx;
			font-family: PingFang-SC-Bold;
			display: flex;
			justify-content: space-around;
			align-items: center;
	
			.initial,
			.activeClass {
				display: flex;
				justify-content: center;
				align-items: center;
	
				.assend {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin-left: 8upx;
	
					image {
						width: 12upx;
						height: 8upx;
					}
				}
			}
	
			.activeClass {
				border-bottom: 4upx solid #E22537;
			}
	
		}
	}
	.replenish_stock_wrapper{
		width:100%;
		height:100%;
		background:#F1F1F3;
		.banner{
			width:100%;
			height:230upx;
		}
		.product_list{
			.product_item{
				background:#FFFFFF;
				margin-bottom:20upx;
				.product{
					width:100%;
				}
				.product_intro{
					width:100%;
					height:150upx;
					padding:30upx 22upx;
					box-sizing: border-box;
					font-size:24upx;
					position: relative;
					.product_name{
						font-size:32upx;
					}
					.product_sell{
						margin-top:10upx;
						line-height:2;
						display: flex;
						.product_price{
							color:#E9262E;
						}
						.activity{
							color:#FF8752;
							margin-left:28upx;
							margin-right:42upx;
						}
						.sold{
							color:#777777
						}
					}
					.shopping_cart{
						width:36upx;
						height:36upx;
						position:absolute;
						right:32upx;
						bottom:46upx;
					}
				}
				
			}
		}
	}
</style>
