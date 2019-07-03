<template>
	<view class="page-content">
		<view class="top-content">
			<view class="city-button">
				北京
				<image v-bind:src="downArrowIcon" class="city-icon"></image>
			</view>
			<view class="search-content">
				<image v-bind:src="searchIcon" class="search-icon"></image>
				搜索分销商品
			</view>
			<view class="category-button">
				<image v-bind:src="classifyIcon" class="category-icon"></image>
				分类
			</view>
		</view>

		<image v-bind:src="ruleIcon" class="tips-icon" mode="scaleToFill"></image>

		<view class="distribution-shop-size">分销店铺：254家</view>
		<view class="statistics-content">
			<view class="statistics-item">
				<view class="statistics-item-size">
					{{
						productList.reduce((acc, element, index) => {
							return acc + element.productItemModels.length;
						}, 0)
					}}
				</view>
				<view class="statistics-item-name">全部商品</view>
			</view>
			<view class="statistics-line"></view>
			<view class="statistics-item">
				<view class="statistics-item-size">
					{{
						productList.reduce((acc, element, index) => {
							return acc + element.productItemModels.length;
						}, 0)
					}}
				</view>
				<view class="statistics-item-name">促销商品</view>
			</view>
			<view class="statistics-line"></view>
			<view class="statistics-item">
				<view class="statistics-item-size">
					{{
						productList.reduce((acc, element, index) => {
							return acc + element.productItemModels.length;
						}, 0)
					}}
				</view>
				<view class="statistics-item-name">新品</view>
			</view>
		</view>
		<view class="order-content">
			<view class="order-item" @click="changOrderIndex(0)">
				<view class="order-item-text" :style="{ color: orderIndex === 0 ? 'rgba(255,82,85,1)' : 'rgba(51,51,51,1)' }">推荐</view>
			</view>
			<view class="order-line"></view>
			<view class="order-item" @click="changOrderIndex(1)">
				<view class="order-item-text" :style="{ color: orderIndex === 1 ? 'rgba(255,82,85,1)' : 'rgba(51,51,51,1)' }">佣金</view>
				<image v-bind:src="orderIndex === 1 ? (orderIndexUp ? orderIconAsc : orderIconDesc ): orderIcon" class="order-icon"></image>
			</view>
			<view class="order-line"></view>
			<view class="order-item" @click="changOrderIndex(2)">
				<view class="order-item-text" :style="{ color: orderIndex === 2 ? 'rgba(255,82,85,1)' : 'rgba(51,51,51,1)' }">销量</view>
			</view>
			<view class="order-line"></view>
			<view class="order-item" @click="changOrderIndex(3)">
				<view class="order-item-text" :style="{ color: orderIndex === 3 ? 'rgba(255,82,85,1)' : 'rgba(51,51,51,1)' }">价格</view>
				<image v-bind:src="orderIndex === 3 ? (orderIndexUp ? orderIconAsc : orderIconDesc ): orderIcon" class="order-icon"></image>
			</view>
			<view class="order-line order-line-plus"></view>
			<view class="order-item"><image v-bind:src="changeViewIcon" class="scan-icon"></image></view>
		</view>
		<scroll-view scroll-y class="product-list">
			<view v-for="(productStore, index) in productList" :key="index" class="product-store">
				<view v-for="(product, index2) in productStore.productItemModels" :key="index2" class="product-item" @click="enterDetail">
					<image v-bind:src="product.imageUrl" class="product-icon"></image>
					<view class="product-desc">
						<view class="product-name">{{ product.name + '   ' + product.volume }}</view>
						<view class="product-price-content">
							<view class="product-price">￥{{ product.currentPrice / 100 }}</view>
							<view class="product-commission">佣金:￥2.00</view>
						</view>
						<view class="product-button-content">
							<view class="product-count">已售{{ product.saleMount }}</view>
							<view class="product-state">已添加到店铺</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';
export default {
	data() {
		return {
			changeViewIcon: '../../static/distribution/change_view_icon.png',
			classifyIcon: '../../static/distribution/classify_icon.png',
			downArrowIcon: '../../static/distribution/down_arrow_icon.png',
			orderIcon: '../../static/distribution/order_icon.png',
			orderIconAsc: '../../static/distribution/order_icon_asc.png',
			orderIconDesc: '../../static/distribution/order_icon_desc.png',
			productIcon: '../../static/distribution/product_icon.png',
			searchIcon: '../../static/distribution/search_icon.png',
			ruleIcon: '../../static/distribution/rule_icon.png',
			//productList: [0, 1, 2, 3, 4, 5, 6, 7],
			orderIndex: 0,
			orderIndexUp:true,
			
		};
	},
	computed: {
		...mapState({
			productList: state => state.distribution.productList
		}),
		...mapGetters({
			//allFinished: 'chooseCode/allFinished',
		})
	},
	methods: {
		...mapActions({
			getDistributionList: 'distribution/getDistributionList'
		}),
		enterDetail() {
			uni.navigateTo({
				url: './productDetails'
			});
		},
		changOrderIndex(index) {
			switch (index) {
				case 0:
					{
						if (this.orderIndex !== 0) {
							this.getDistributionList({
								categoryType: null,
								sortType: null
							});
						}
					}
					break;
				case 1:
					{
						if (this.orderIndex === 1) {
							this.orderIndexUp = !this.orderIndexUp;
							this.getDistributionList({
								categoryType: 'price',
								sortType: this.orderIndexUp ? 'asc' : 'desc'
							});
						}else{
							this.orderIndexUp = true;
							this.getDistributionList({
								categoryType: 'price',
								sortType: 'asc'
							});
						}
					}
					break;
				case 2:
					{
						if (this.orderIndex !== 2) {
							this.getDistributionList({
								categoryType: 'saleMount',
								sortType: 'desc'
							});
						}
					}
					break;
				case 3:
					{
						
						if (this.orderIndex === 3) {
							this.orderIndexUp = !this.orderIndexUp;
							this.getDistributionList({
								categoryType: 'price',
								sortType: this.orderIndexUp ? 'asc' : 'desc'
							});
						}else{
							this.orderIndexUp = true;
							this.getDistributionList({
								categoryType: 'price',
								sortType: 'asc'
							});
						}
					}
					break;
			}

			this.orderIndex = index;
		}
	},
	onLoad() {
		this.getDistributionList({
			categoryType: null, //排序种类，销量（saleMount）价格（price） ,
			sortType: null //排序类型,升序（asc）降序（desc）
		});
	}
};
</script>

<style lang="less">
.page-content {
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: #f1f1f1;
	height: 100%;
	.top-content {
		background-color: white;
		display: flex;
		flex-direction: row;
		height: 94upx;
		align-items: center;
		.city-button {
			padding-left: 26upx;
			padding-right: 26upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 30upx;
			font-family: HiraginoSansGB-W3;
			font-weight: normal;
			color: rgba(38, 38, 38, 1);

			.city-icon {
				width: 26upx;
				height: 14upx;
			}
		}
		.search-content {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex: 1;
			height: 60upx;
			background: rgba(229, 231, 233, 1);
			border-radius: 29upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			.search-icon {
				width: 24upx;
				height: 24upx;
				margin-right: 10upx;
			}
		}
		.category-button {
			padding-left: 26upx;
			padding-right: 26upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 28upx;
			font-family: HiraginoSansGB-W3;
			font-weight: normal;
			color: rgba(119, 119, 119, 1);

			.category-icon {
				width: 34upx;
				height: 34upx;
			}
		}
	}

	.tips-icon {
		width: 100%;
		height: 226upx;
	}

	.distribution-shop-size {
		background-color: rgba(0, 0, 0, 0);
		display: flex;
		justify-content: flex-end;
		margin-right: 25upx;
		font-size: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(254, 254, 254, 1);
		margin-top: -50upx;
	}
	.statistics-content {
		display: flex;
		background-color: white;
		margin-top: 30upx;
		align-items: center;
		.statistics-item {
			display: flex;
			flex-direction: column;
			flex: 1;
			padding-top: 25upx;
			padding-bottom: 25upx;
			align-items: center;
			.statistics-item-size {
				font-size: 32upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				//color: rgba(255, 0, 0, 1);
				color: #666666;
			}
			.statistics-item-name {
				font-size: 26upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				//color: rgba(255, 82, 85, 1);
				color: #666666;
			}
		}
		.statistics-line {
			width: 1upx;
			height: 37upx;
			background: rgba(222, 222, 222, 1);
		}
	}
	.order-content {
		display: flex;
		background-color: white;
		margin-top: 24upx;
		align-items: center;

		.order-item {
			display: flex;
			flex: 1;
			height: 100upx;
			align-items: center;
			border-bottom: solid 1upx #d1d1d1;
			justify-content: center;
			.order-item-text {
				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
			}
			.order-icon {
				width: 16upx;
				height: 19upx;
				margin-left: 6upx;
			}
			.scan-icon {
				width: 36upx;
				height: 36upx;
			}
		}
		.order-line {
			width: 1upx;
			height: 60upx;
			background: rgba(219, 219, 219, 1);
		}
		.order-line-plus {
			height: 100upx;
		}
	}
	.product-list {
		display: flex;
		flex-direction: column;
		flex: 1;

		.product-store {
			display: flex;
			flex-direction: column;

			.product-item {
				background-color: white;
				display: flex;
				padding: 14upx 14upx 14upx 14upx;
				.product-icon {
					width: 210upx;
					height: 210upx;
				}
				.product-desc {
					display: flex;
					flex-direction: column;
					margin-left: 24upx;
					flex: 1;
					.product-name {
						font-size: 32upx;
						width: 376upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						flex: 1;
					}
					.product-price-content {
						display: flex;
						align-items: center;

						.product-price {
							font-size: 34upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: #eb474d;
						}
						.product-commission {
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(119, 119, 119, 1);
							margin-left: 60upx;
						}
					}

					.product-button-content {
						display: flex;
						align-items: center;
						margin-top: 8upx;
						padding-right: 10upx;
						padding-bottom: 18upx;
						.product-count {
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(119, 119, 119, 1);
							flex: 1;
						}
						.product-state {
							padding: 6upx 10upx 6upx 10upx;
							border: 1upx solid rgba(153, 153, 153, 1);
							border-radius: 4px;
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}
		}
	}
}
</style>
