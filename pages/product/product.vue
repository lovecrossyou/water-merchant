<template>
	<view class="product_wrapper">
		<!-- 搜索框 -->
		<view class="search_area">
			<view class="flex_area">
				<image src="http://qnimage.xiteng.com/icon_search@2x.png" class="search_icon"></image>
				<input type="text" value="" placeholder="搜索商品" class="search_input" />
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="commodity_list">
			<image src="http://img4.imgtn.bdimg.com/it/u=3509550931,2619482077&fm=26&gp=0.jpg" mode="aspectFill" class="commodity_img"></image>
			<view class="commodity_details">
				<view class="commodity_name">喜腾山泉 天然饮用水18L买10送1</view>
				<view class="commodity_price">
					<view class="rmb_symbol">￥</view>
					<view class="price_num">22.00</view>
				</view>
				<view class="commodity_num">
					<view class="sold_num">已售 23525</view>
					<view class="inventory_num">库存 99</view>
					<view class="commodity_state">待售</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../util/api.js';
export default {
	data() {
		return {};
	},
	methods: {
		async productList() {
			let res = await api.productList({
				accessInfo: {
					access_secret: 'string',
					access_token: 'string',
					appVersion: 'string',
					app_key: 'string',
					hardwareVersion: 'string',
					os: 'string',
					reqSource: 'string'
				},
				productStatus: 'onSale',
				// shopProductId: 1,
				sort: 'time',
				sortType: 'asc'
			});
			this.storeProductList = res;
			console.log(this.storeProductList);
		}
	},
	onShow() {
		this.productList();
	}
};
</script>

<style scoped>
.product_wrapper {
	width: 100%;
}
.search_area {
	width: 100%;
	background: #efeff4;
	padding: 20upx 24upx;
	box-sizing: border-box;
	background-color: #efeff4;
}
.flex_area {
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 17upx;
	box-sizing: border-box;
}
.search_icon {
	width: 30upx;
	height: 30upx;
}
.search_input {
	font-size: 28upx;
	margin-left: 14upx;
}
.commodity_list {
	width: 100%;
	padding: 15upx;
	box-sizing: border-box;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.commodity_img {
	width: 210upx;
	height: 210upx;
}
.commodity_details {
	flex: 1;
	margin-left: 23upx;
	padding: 17upx 0;
	box-sizing: border-box;
}
.commodity_name {
	color: #333333;
	font-size: 32upx;
	font-weight: 500;
}
.commodity_price {
	display: flex;
	flex-direction: row;
	margin-top: 25upx;
}
.rmb_symbol {
	color: #eb474d;
	font-size: 26upx;
	margin-top: 10upx;
}
.price_num {
	color: #eb474d;
	font-size: 34upx;
	font-weight: 500;
}
.commodity_num {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 21upx;
}
.sold_num {
	color: #777777;
	font-size: 24upx;
	margin-right: 25upx;
}
.inventory_num {
	color: #777777;
	font-size: 24upx;
	flex: 1;
}
.commodity_state {
	width: 66upx;
	height: 32upx;
	border: 1upx solid #999999;
	border-radius: 4upx;
	color: #999;
	font-size: 24upx;
	text-align: center;
	line-height: 32upx;
	margin-right: 20upx;
}
</style>
