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
		<view class="margin_bottom">
			<block v-for="(item, index) in productList" :key="index">
				<view class="commodity_list">
					<image :src="item.productImg" class="commodity_img" mode="aspectFill"></image>
					<view class="commodity_details">
						<view class="commodity_name">{{ item.productName }}</view>
						<view class="commodity_price">
							<view class="rmb_symbol">￥</view>
							<view class="price_num">{{ item.productPrice }}</view>
						</view>
						<view class="commodity_num">
							<view class="sold_num">已售 {{ item.soldNum }}</view>
							<view class="inventory_num">库存 {{ item.commodityState }}</view>
							<view class="commodity_state">{{ item.productState }}</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		
		<!-- 底部操作 -->
		<view class="bottom_operation">
			<view class="operation_item">
				<image src="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" class="operation_icon"></image>
				<view class="operation_text">分类管理</view>
			</view>
			<view class="operation_item">
				<image src="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" class="operation_icon"></image>
				<view class="operation_text">标签管理</view>
			</view>
			<view class="operation_item">
				<image src="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" class="operation_icon"></image>
				<view class="operation_text">添加商品</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../util/api.js';
export default {
	data() {
		return {
			productList: [
				{
					productImg: 'http://img1.imgtn.bdimg.com/it/u=3628836046,3677033089&fm=26&gp=0.jpg',
					productName: '农夫山泉天然饮用水18L买10送1',
					productPrice: '22',
					soldNum: '236',
					commodityState: '44',
					productState: '待售'
				},
				{
					productImg: 'http://img5.imgtn.bdimg.com/it/u=3719553322,2047499783&fm=26&gp=0.jpg',
					productName: '屈臣氏桶装水天然饮用水18L买10送1',
					productPrice: '25',
					soldNum: '5987',
					commodityState: '635',
					productState: '待售'
				},
				{
					productImg: 'http://img3.imgtn.bdimg.com/it/u=1493762407,3924450288&fm=26&gp=0.jpg',
					productName: '景甜桶装水',
					productPrice: '77',
					soldNum: '965',
					commodityState: '23',
					productState: '待售'
				},
				{
					productImg: 'http://img4.imgtn.bdimg.com/it/u=2979190474,93934470&fm=26&gp=0.jpg',
					productName: '怡宝桶装水',
					productPrice: '24',
					soldNum: '965',
					commodityState: '23',
					productState: '待售'
				},
				{
					productImg: 'http://img1.imgtn.bdimg.com/it/u=2959097771,332863436&fm=26&gp=0.jpg',
					productName: '娃哈哈桶装水',
					productPrice: '47',
					soldNum: '965',
					commodityState: '23',
					productState: '待售'
				},
				{
					productImg: 'http://img5.imgtn.bdimg.com/it/u=3033205407,3473984034&fm=26&gp=0.jpg',
					productName: '乐百氏装水',
					productPrice: '24',
					soldNum: '965',
					commodityState: '25',
					productState: '待售'
				}
			]
		};
	},
	methods: {
		// async productList() {
		// 	let res = await api.productList({
		// 		accessInfo: {
		// 			access_secret: 'string',
		// 			access_token: 'string',
		// 			appVersion: 'string',
		// 			app_key: 'string',
		// 			hardwareVersion: 'string',
		// 			os: 'string',
		// 			reqSource: 'string'
		// 		},
		// 		productStatus: 'onSale',
		// 		// shopProductId: 1,
		// 		sort: 'time',
		// 		sortType: 'asc'
		// 	});
		// 	this.storeProductList = res;
		// 	console.log(this.storeProductList);
		// }
	},
	onShow() {
		// this.productList();
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
.bottom_operation{
	width: 100%;
	height: 98upx;
	background-color: #fff;
	padding: 30upx 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-top: 1upx solid #E3E3E3;
	position: fixed;
	left: 0;
	bottom: 0;
}
.operation_item{
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-right: 1upx solid #E3E3E3;
	justify-content: center;
}
.operation_icon{
	width: 28upx;
	height: 28upx;
	margin-right: 13upx;
}
.operation_text{
	color: #333333;
	font-size: 26upx;
}
.margin_bottom{
	margin-bottom: 100upx;
}
.operation_item:nth-child(3){
	border: none;
}
</style>
