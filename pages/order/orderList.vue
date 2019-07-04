<template>
	<view class="page-content">
		<view class="order-item" v-for="(order, index) in orderList" :key="index">
			<view class="time-content">
				<view class="time">下单时间：2017-7-21 09:32</view>
				<view class="time status">{{order.orderState}}</view>
			</view>
			<view class="product-content" v-for="(product, index2) in order.productList" :key="index2">
				<image :src="productIcon" class="product-image"></image>
				<view class="product-info">
					<view class="name">乐百氏 矿泉水</view>
					<view class="size">18.9L</view>
					<view class="singlePrice">￥23.00 ×1</view>
				</view>
				<image :src="completeIcon" class="status-image" v-if="order.orderStatus === 'complete' && index2 === 0"></image>
			</view>

			<view class="total-price-content">
				<view class="count">共1件商品，合计：</view>
				<view class="total-price">￥23.00</view>
			</view>
			<view class="bottom-content" v-if="order.orderStatus === 'wait'">
				<view class="reject-button">拒单</view>
				<view class="reject-button confirm-button">去送货</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderList: [],
			productIcon: '../../static/distribution/product_icon.png',
			completeIcon: '../../static/order/complete.png'
		};
	},
	onLoad(opts) {
		switch (opts.orderStatus) {
			//全部订单
			case '0':
				{
					this.orderList = [
						{ productList: [1], orderStatus: 'cancel', orderState: '已取消' },
						{ productList: [1, 2], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1, 2, 3], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待收货' }
					];
				}
				break;
			//待付款
			case '1':
				{
					this.orderList = [
						{ productList: [1], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1, 2], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1, 2, 3], orderStatus: 'cancel', orderState: '待付款' }
					];
				}
				break;
			//待送货
			case '2':
				{
					this.orderList = [
						{ productList: [1, 2], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1, 2, 3], orderStatus: 'wait', orderState: '待送货' }
					];
				}
				break;
			//待收货
			case '3':
				{
					this.orderList = [
						{ productList: [1], orderStatus: 'cancel', orderState: '待收货' },
						{ productList: [1, 2], orderStatus: 'cancel', orderState: '待收货' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待收货' },
						{ productList: [1, 3, 3], orderStatus: 'cancel', orderState: '待收货' }
					];
				}
				break;
			//评价
			case '4':
				{
					this.orderList = [
						{ productList: [1, 2, 3], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1, 2, 3], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1, 2], orderStatus: 'complete', orderState: '已完成' }
					];
				}
				break;
		}
	}
};
</script>

<style lang="less">
.page-content {
	display: flex;
	flex-direction: column;
	background-color: #f1f1f1;
	width: 100%;
	padding-top: 32upx;
	.order-item {
		display: flex;
		flex-direction: column;
		background-color: white;
		margin-bottom: 32upx;
		.time-content {
			display: flex;
			padding: 30upx 26upx 26upx 26upx;
			border-bottom: 1upx solid #f1f1f1;
			.time {
				font-size: 26upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(119, 119, 119, 1);
			}
			.status {
				color: rgba(255, 82, 85, 1);
				flex: 1;
				display: flex;
				justify-content: flex-end;
			}
		}
		.product-content {
			display: flex;
			padding: 20upx 24upx 20upx 24upx;
			border-bottom: 1upx solid #f1f1f1;
			align-items: center;
			.product-image {
				width: 130upx;
				height: 130upx;
			}
			.product-info {
				display: flex;
				flex-direction: column;
				margin-left: 20upx;
				flex: 1;
				.name {
					font-size: 30upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
				.size {
					font-size: 24upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					margin-top: 8upx;
					margin-bottom: 12upx;
				}
				.singlePrice {
					font-size: 30upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}
			}
			.status-image {
				width: 108upx;
				height: 108upx;
				margin-top: -180upx;
			}
		}

		.total-price-content {
			display: flex;
			padding: 24upx 24upx 28upx 26upx;
			border-bottom: 1upx solid #f1f1f1;
			justify-content: flex-end;
			.count {
				font-size: 24upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: #777777;
			}
			.total-price {
				font-size: 24upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: #f13252;
			}
		}
		.bottom-content {
			display: flex;
			padding: 16upx 26upx 14upx 26upx;
			justify-content: flex-end;
			.reject-button {
				width: 141upx;
				padding-top: 12upx;
				padding-bottom: 12upx;
				border: 1upx solid rgba(119, 119, 119, 1);
				border-radius: 4upx;
				font-size: 24upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(119, 119, 119, 1);
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 18upx;
			}
			.confirm-button {
				border: 1upx solid rgba(255, 82, 85, 1);
				color: rgba(255, 82, 85, 1);
			}
		}
	}
}
</style>
