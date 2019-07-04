<template>
	<view class="home_warpper">
		<view class="header">
			<view v-if="status.merchantStatus=== ''" class="open_shop">
				<view>店铺信息获取中</view>
				<view class="open_shop_btn" @click="goPage('registration')">立即开店</view>
			</view>
			<view v-else-if="status.merchantStatus=== 'pass_status'" class="open_shop">
				<view class="store_detail">
					<view class="head_portrait">
						<img :src="shopInfo.imageUrl" alt="">
						<view>
							<view class="store_name">{{shopInfo.name}}</view>
							<view class="store_number">商户号：{{shopInfo.shopNumber}}</view>
						</view>
					</view>
					<view class="enter_store" @click="goPage('registration')">
						<view>进入店铺</view>
						<img :src="icon_right" alt="">
					</view>
				</view>
			</view>
			<view v-else-if="status.merchantStatus=== 'waiting_for_add_shop_info'" class="open_shop">
				<view>待完善信息</view>
			</view>
			<view v-else="status.merchantStatus=== 'waiting_for_add_shop_info'" class="open_shop">
				<view>店铺正在等待审核中...</view>
			</view>
			
			<view class="category">
				<view class="category_item">
					<view class="col_red">0</view>
					<view class="col_gray">全部商品</view>
				</view>
				<view class="cut_off"></view>
				<view class="category_item">
					<view class="col_red">￥0.00</view>
					<view class="col_gray">本月销售</view>
				</view>
				<view class="cut_off"></view>
				<view class="category_item">
					<view class="col_red">0</view>
					<view class="col_gray">全部客户</view>
				</view>
			</view>
		</view>
		
		<view class="commodity_category">
			<view class="category_item">
				<img :src="shop_btn_store_management" alt="">
				<view class="col_gray">店铺管理</view>
			</view>
			<view class="category_item" @click="goPage('product')">
				<img :src="shop_btn_commodity_management" alt="">
				<view class="col_gray">商品管理</view>
			</view>
			<view class="category_item">
				<img :src="shop_btn_promotion_management" alt="">
				<view class="col_gray">促销管理</view>
			</view>
			<view class="category_item">
				<img :src="shop_btn_marketing" alt="">
				<view class="col_gray">市场推广</view>
			</view>
			<view class="category_item">
				<img :src="shop_btn_customer_management" alt="">
				<view class="col_gray">客户管理</view>
			</view>
			<view class="category_item">
				<img :src="shop_btn_sales_performance" alt="">
				<view class="col_gray">销售业绩</view>
			</view>
		</view>
		<view class="sale_container">
			<view class="sale_order" @click="enterOrderList(0)">
				<view class="sale_order_left">
					<img :src="shop_icon_order" alt="">
					<view>销售订单</view>
				</view>
				<view class="sale_order_right">
					<img :src="shop_icon_right" alt="">
				</view>
			</view>
			<view class="order_state">
				<view class="category_item" @click="enterOrderList(1)">
					<img :src="shop_order_btn_pending_payment" alt="">
					<view class="col_gray">待付款</view>
				</view>
				<view class="category_item" @click="enterOrderList(2)">
					<img :src="shop_order_btn_delivery_pending" alt="">
					<view class="col_gray">待送货</view>
				</view>
				<view class="category_item" @click="enterOrderList(3)">
					<img :src="shop_order_btn_recieve" alt="">
					<view class="col_gray">待收货</view>
				</view>
				<view class="category_item" @click="enterOrderList(4)">
					<img :src="shop_order_btn_evaluate" alt="">
					<view class="col_gray">评价</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {mapActions,mapState} from "vuex";
	
	export default {
			data() {
				return {
					jinmu:"../../static/index/jinmu.jpg",
					
					shop_btn_store_management:"../../static/index/shop_btn_store_management.png",
					shop_btn_commodity_management:"../../static/index/shop_btn_commodity_management.png",
					shop_btn_promotion_management:"../../static/index/shop_btn_promotion_management.png",
					shop_btn_marketing:"../../static/index/shop_btn_marketing.png",
					shop_btn_customer_management:"../../static/index/shop_btn_customer_management.png",
					shop_btn_sales_performance:"../../static/index/shop_btn_sales_performance.png",
					
					shop_icon_order:"../../static/index/shop_icon_order.png",
					shop_icon_right:"../../static/index/shop_icon_right.png",
					icon_right:"../../static/index/icon_right.png",
					
					shop_order_btn_pending_payment:"../../static/index/shop_order_btn_pending_payment.png",
					shop_order_btn_delivery_pending:"../../static/index/shop_order_btn_delivery_pending.png",
					shop_order_btn_recieve:"../../static/index/shop_order_btn_recieve.png",					
					shop_order_btn_evaluate:"../../static/index/shop_order_btn_evaluate.png",					
					
				}
			},
			onLoad() {
				let that = this;
				this.checkLogin(()=>{
					that.shopStatus();
					that.fetchShopInfo();
				});
			},
			methods: {
				...mapActions(['checkLogin','fetchShopInfo']),
				...mapActions('shop',['shopStatus']),
				goPage(page){
					console.log(page)
					uni.navigateTo({
						url:`/pages/${page}/${page}`
					});
				},
				enterOrderList(orderStatus){
					uni.navigateTo({
						url:'../order/orderList?orderStatus='+orderStatus
					});
				}
			},
			computed:{
				...mapState(['shopInfo']),
				...mapState('shop',['status'])
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
			.store_detail{
				width:100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-left:36upx;
				padding-right:24upx;
				box-sizing: border-box;
				.head_portrait{
					display: flex;
					img{
						width:88upx;
						height:86upx;
						margin-right:20upx;
					}
					.store_name{
						font-size:32upx;
					}
					.store_number{
						font-size:26upx;
						color:#F4E1E1;
					}
				}
				.enter_store{
					font-size:28upx;
					display: flex;
					align-items: center;
					img{
						width:18upx;
						height:30upx;
						margin-left:16upx;
					}
				}
			}
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
				align-items: center;
				font-size: 26upx;
				border-bottom:1upx solid #DEDEDE;
				.cut_off{
					width:2upx;
					height:36upx;
					background:#DEDEDE;
				}
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
					margin-bottom:16upx;
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
				justify-content: space-between;
				align-items: center;
				padding-right:26upx;
				box-sizing: border-box;
				border-bottom:1upx solid #DEDEDE;
				.sale_order_left{
					display: flex;
					align-items: center;
					img{
						width:30upx;
						height:32upx;
						margin-left:26upx;
						margin-right:20upx;
					}
				}
				.sale_order_right{
					img{
						width:18upx;
						height:30upx;
					}
				}
				
			}
			.order_state{
				width:100%;
				height:140upx;
				display: flex;
				font-size:24upx;
				.category_item{
					flex:1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					img{
						width:42upx;
						height:42upx;
						margin-bottom:12upx;
					}
				}
			}
		}	
	}
</style>	
