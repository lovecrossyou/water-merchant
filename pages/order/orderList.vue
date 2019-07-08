<template>
	<view class="page-content">
		<view class="order-item" v-for="(order, index) in orderList" :key="index">
			<view class="time-content">
				<view class="time">下单时间：{{order.createTime}}</view>
				<view class="time status">{{order.status}}</view>
			</view>
			<view class="product-content" v-for="(product, index2) in order.productItemModels" :key="index2">
				<image :src="product.imageUrl" class="product-image"></image>
				<view class="product-info">
					<view class="name">{{product.name}}</view>
					<view class="size">{{product.volume}}</view>
					<view class="singlePrice">￥ 
					<priceText :price="(product.currentPrice / 100)"></priceText>
					×{{product.selectCount}}</view>
				</view>
				<image :src="completeIcon" class="status-image" v-if="order.status === '已完成' && index2 === 0"></image>
			</view>

			<view class="total-price-content">
				<view class="count">共{{order.totalCount}}件商品，合计：</view>
				<view class="total-price">￥
				<priceText :price="(order.totalPayRmb / 100)"></priceText>
				</view>
			</view>
			<view class="bottom-content" v-if="order.status === '待送货'">
				<view class="reject-button">拒单</view>
				<view class="reject-button confirm-button">去送货</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';
	import priceText from '../component/priceText.vue';
export default {
	data() {
		return {
			//orderList: [],
			productIcon: '../../static/distribution/product_icon.png',
			completeIcon: '../../static/order/complete.png'
		};
	},
	components: {
		
		priceText,
		
	},
	computed: {
		...mapState({
			orderList: state => state.order.orderList
		}),
		...mapGetters({
			//allFinished: 'chooseCode/allFinished',
		})
	},
	methods:{
		...mapActions({
			getOrderList: 'order/getOrderList',
			getOrderComment: 'order/getOrderComment',
		}),
	},
	onLoad(opts) {
		switch (opts.orderStatus) {
			
			
			
			//   wait_pay待付款    wait_delivery待送货    wait_receive待收货    total全部
			
			//全部订单
			case '0':
				{
					this.getOrderList('total');
					/* this.orderList = [
						{ productList: [1], orderStatus: 'cancel', orderState: '已取消' },
						{ productList: [1, 2], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1, 2, 3], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待收货' }
					]; */
				}
				break;
			//待付款
			case '1':
				{
					this.getOrderList('wait_pay');
					/* this.orderList = [
						{ productList: [1], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1, 2], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待付款' },
						{ productList: [1, 2, 3], orderStatus: 'cancel', orderState: '待付款' }
					]; */
				}
				break;
			//待送货
			case '2':
				{
					this.getOrderList('wait_delivery');
					/* this.orderList = [
						{ productList: [1, 2], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1], orderStatus: 'wait', orderState: '待送货' },
						{ productList: [1, 2, 3], orderStatus: 'wait', orderState: '待送货' }
					]; */
				}
				break;
			//待收货
			case '3':
				{
					this.getOrderList('wait_receive');
					
					/* this.orderList = [
						{ productList: [1], orderStatus: 'cancel', orderState: '待收货' },
						{ productList: [1, 2], orderStatus: 'cancel', orderState: '待收货' },
						{ productList: [1], orderStatus: 'cancel', orderState: '待收货' },
						{ productList: [1, 3, 3], orderStatus: 'cancel', orderState: '待收货' }
					]; */
				}
				break;
			//评价
			case '4':
				{
					this.getOrderComment();
					
					/* this.orderList = [
						{ productList: [1, 2, 3], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1, 2, 3], orderStatus: 'complete', orderState: '已完成' },
						{ productList: [1, 2], orderStatus: 'complete', orderState: '已完成' }
					]; */
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
					display: flex;
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
				display: flex;
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
