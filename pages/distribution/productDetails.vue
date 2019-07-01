<template>
	<view class="product_details_wrapper" ref="homPage">
		<!-- 轮播 -->
		<view class="scroll-wrapper">
			<swiper class="swiper" :indicator-dots="indicatorDots" :interval="interval" :duration="duration">
				<swiper-item class="swiper-item" v-for="(item, i) in banners" :key="i">
					<view><image :src="item" mode="aspectFill"></image></view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 商品信息 -->

		<view class="product-info-content">
			<view class="product-name">喜腾山泉 天然饮用水 18L</view>
			<view class="product-description">买10送1</view>
			<view class="price-section">
				<view class="price-section-item">
					<view class="price">
						￥
						<span class="big">{{ '22.00' }}</span>
					</view>
					<view class="vip">佣金:￥{{ '2.00' }}</view>
				</view>
				<view class="price-section-size">已售{{ '235' }}</view>
			</view>
		</view>

		<!-- 优惠信息  -->

		<view class="product-info-title-wrap">
			<view class="product-info-title">促销：</view>
			<span class="pinkage">满赠</span>
			买10桶送1
		</view>

		<!-- 规格选择 -->
		<view class="winning_periods" @click="chooseSize">
			<view class="particulars_item">
				<view class="item-key">选择：</view>
				<view class="designation">18L</view>
				<image :src="icon_right"></image>
			</view>
		</view>
		<!-- 服务说明 -->
		<view class="winning_periods">
			<view class="particulars_item">
				<view class="item-key">配送：</view>
				<view class="designation">北京全市配送</view>
			</view>
			<view class="particulars_item">
				<view class="item-key">服务：</view>
				<view class="designation">24小时以内送达</view>
			</view>
			<view class="particulars_item">
				<view class="item-key">押金：</view>
				<view class="designation">{{ moneyDetail }}</view>
			</view>
		</view>
		<!-- 晒单 -->
		<view class="winning_periods">
			<view class="particulars_item" @click="goshowWinOrder">
				<view class="designation">商品评价（121）</view>

				<view class="item-key">查看更多</view>
				<image :src="icon_right"></image>
			</view>
			<view class="product-comment">
				<view class="product-comment-item" v-for="(commentUser, index) in commentModelList" :key="index">
					<view class="user_icon"><image :src="commentUser.userIcoin"></image></view>
					<view class="product-comment-item-message">
						<view class="product_comment_user_name">
							<view class="user_name_left">
								<view>{{ commentUser.userName }}</view>
								<view class="user_star_content">
									<image :src="commentUser.star >= star ? starLight : starGray" v-for="(star, index1) in [1, 2, 3, 4, 5]" :key="index1"></image>
								</view>
							</view>

							<view class="add_time">{{ commentUser.time }}</view>
						</view>

						<view class="comment-content">{{ commentUser.content }}</view>
						<view class="comment-img">
							<block v-for="(item, i) in commentUser.imageUrlList" :key="i"><image :src="item"></image></block>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="winning_periods">
			<view class="particulars_item"><view class="designation">商品详情</view></view>
			<view class="detail_imgurllist">
				<block v-for="(item, i) in banners" :key="i"><image :src="item" mode="widthFix"></image></block>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<button class="left_message" open-type="contact">
				<image class="top" :src="btn_message" open-type="contact"></image>
				<view class="name">客服</view>
			</button>
			
			<view class="right_buy" @click="confirmOrder(true)">
				
				<view class="big">添加到店铺</view>
			</view>
			<form class="right_buy bgr" @submit="formSubmit" report-submit="true">
				
				<button class="contact-button" form-type="submit">立即分享</button>
			</form>
		</view>
	</view>
</template>
<script>
import api from '../../util/api.js';
//	import timeUtil from '../../util/timeUtil.js';
import { mapState } from 'vuex';
export default {
	onUnload() {
		clearInterval(this.timer);
		//this.$store.commit('productDetail/resetProductDetail');
	},
	computed: {
		//...mapState('productDetail', ['productDetail']),

		banners() {
			//if (this.productDetail === null) return null;
			//return this.productDetail.productItemModel.productShowImageUrlList

			return [
				'../../static/distribution/product_icon.png',
				'../../static/distribution/product_icon.png',
				'../../static/distribution/product_icon.png',
				'../../static/distribution/product_icon.png'
			];
		}
	},
	methods: {
		async formSubmit(e) {
			uni.showLoading();
			await api.WeChatUserFormId({
				formId: e.detail.formId
			});
			this.confirmOrder(false);
			uni.hideLoading();
		},
		async fetchCollectProduct(productId) {
			const res = await api.collectProduct({
				discountGameId: productId
			});
		},
		collectProduct(discountGameId) {
			this.isBg = !this.isBg;
			this.fetchCollectProduct(discountGameId);
		},
		goBuying() {
			uni.navigateTo({
				url: '/pages/buying/buying?productId=' + this.productDetail.discountGameId
			});
		},
		goluckylist() {
			uni.navigateTo({
				url: '/pages/me/vip/lucky-list'
			});
		},
		goshowWinOrder() {
			uni.navigateTo({
				url: '/pages/moments/components/showWinOrder'
			});
		},
		changeIndex(ind) {
			this.selectedIndex = ind;
		},
		goBack() {
			uni.navigateBack();
		},
		async fetchProductDetails(productId) {
			const res = await api.productDetails({
				discountGameId: productId
			});
			this.$store.commit('productDetail/setProductDetails', res);
			this.timerCountDown();
		},
		confirmOrder(directBuy) {
			uni.navigateTo({
				url: '../chooseCode/confirmOrder?discountGameId=' + this.productDetail.discountGameId + '&directBuy=' + directBuy + '&groupId=' + this.groupId
			});
		},
		timerCountDown() {
			this.timer = setInterval(this.countDown, 1000);
		},
		countDown() {
			this.lastTime = timeUtil.showTickTime(this.productDetail.openResultTime);
		},
		async collectState(productId) {
			let res = await api.collectState({
				discountGameId: productId
			});
			if (res.valid == true) {
				this.isBg = true;
			}
		}
	},
	onLoad(opt) {
		//this.fetchProductDetails(opt.productId);
		//this.groupId = opt.groupId;
		//this.collectState(opt.productId)
	},
	data() {
		return {
			timer: null,
			groupId: null,
			selectedIndex: 0,
			commentModelList: [
				{
					userIcoin: '../../static/details/btn_like.png',
					userName: '123',
					time: '2019-01-01',
					content: '用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾！',
					imageUrlList: ['../../static/details/test_1.png', '../../static/details/test_2.png', '../../static/details/test_2.png'],
					star: 4
				},
				{
					userIcoin: '../../static/details/btn_like.png',
					userName: '465',
					time: '2019-01-01',
					content: '赢的币已经换了两个了，特别好，送货及时，快递师傅也很辛很划算，下次还会继续光顾！',
					//imageUrlList: ['../../static/details/btn_like.png', '../../static/details/btn_like.png', '../../static/details/btn_like.png'],
					star: 4
				}

				
			],

			moneyDetail: '水站送水时将回收同一品牌空桶，无同一品牌空桶的，水站将另收取水桶押金。退押金时凭空桶及押金条与水站直接办理，与本平台无关。',

			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			share_icon: '../../static/details/share_icon.png',
			icon_right: '../../static/details/icon_right.png',
			icon_lable: '../../static/details/icon_lable.png',
			icon_time: '../../static/details/icon_time.png',
			btn_like: '../../static/details/btn_like.png',
			btn_message: '../../static/details/btn_message.png',
			icon_man: '../../static/details/icon_man.png',
			icon_woman: '../../static/details/icon_woman.png',
			nav_icon_back: '../../static/details/nav_icon_back.png',
			icon_vip: '../../static/details/icon_vip.png',
			starLight: '../../static/details/star_light.png',
			starGray: '../../static/details/star_gray.png',
			btn_collection: '../../static/details/btn_collection.png',
			btn_collection_red: '../../static/details/btn_collection_red.png',
			isBg: false,
			lastTime: null
		};
	}
};
</script>
<style lang="less">
.product_details_wrapper {
	width: 100%;
	background-color: #f3f3f3;
	padding-top: constant(safe-area-inset-top);

	.header {
		width: 100%;
		height: 180upx;
		padding: 77rpx 30rpx 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		border-bottom: 1upx solid #e9e9e9;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 111;

		.left-arrow {
			width: 20upx;
			height: 36upx;

			image {
				width: 20upx;
				height: 36upx;
			}
		}

		.product_title {
			width: 200upx;
			height: 94upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-sizing: border-box;
			font-size: 32upx;
			color: #333;

			.activeBd {
				border-bottom: 4upx solid #333333;
			}

			.initialBd {
				border: none;
			}

			.product_title_item {
				height: 94upx;
				line-height: 94upx;
			}
		}

		.share {
			width: 36upx;
			height: 30upx;

			image {
				width: 36upx;
				height: 30upx;
			}
		}
	}

	.scroll-wrapper {
		height: 700upx;
		width: 100%;

		.swiper {
			width: 100%;
			height: 100%;

			.swiper-item {
				image {
					width: 100%;
					height: 700upx;
				}
			}
		}
	}

	.product-info-content {
		display: flex;
		flex-direction: column;
		padding: 30upx 30upx 30upx 30upx;
		border-bottom: solid 1upx #e3e3e3;
		border-top: solid 1upx #e3e3e3;
		background-color: white;
		.product-name {
			font-size: 40upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
		.product-description {
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(232, 29, 38, 1);
			margin-top: 26upx;
		}
		.price-section {
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 36upx;
			.price-section-item {
				display: flex;
				flex-direction: row;
				align-items: center;

				.price {
					font-size: 26upx;
					font-family: PingFang-SC-Regular;

					color: rgba(255, 66, 67, 1);

					.big {
						font-size: 40upx;
					}
				}

				.vip {
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(119, 119, 119, 1);
					margin-left: 26upx;
				}
			}
			.price-section-size {
				font-size: 26upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(119, 119, 119, 1);
			}
		}
	}

	.product-info-title-wrap {
		background: #ffffff;
		display: flex;
		padding: 32upx 0upx 32upx 28upx;

		font-size: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: #333333;

		.product-info-title {
			color: #7f7f7f;
		}
		.pinkage {
			display: inline-block;
			height: 36upx;
			line-height: 36upx;
			text-align: center;
			background: #ff594b;
			border-radius: 6upx;
			color: #ffffff;
			font-size: 20upx;
			margin-right: 16upx;
			margin-left: 12upx;
			padding-left: 10upx;
			padding-right: 10upx;
		}
	}

	.winning_periods {
		margin-top: 28upx;
		background: #ffffff;

		.snapping_buy {
			.snapping_buy_item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				color: #333333;
				padding: 26upx 28upx;
				box-sizing: border-box;
				border-bottom: 1upx solid #e3e3e3;

				.designation {
					display: flex;
					align-items: center;

					.snapping_buy_user_icon {
						width: 70upx;
						height: 70upx;

						image {
							width: 70upx;
							height: 70upx;
							border-radius: 10upx;
						}
					}

					.snapping_buy_user_sex {
						width: 26upx;
						height: 26upx;

						image {
							width: 26upx;
							height: 26upx;
						}
					}

					.snapping_buy_user_name {
						font-size: 30upx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(43, 84, 144, 1);
						margin-left: 20upx;
						margin-right: 16upx;
					}
				}

				.snapping_buy_time {
					display: flex;
					align-items: center;
					font-size: 24upx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);

					.count {
						font-size: 28upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						margin-left: 16upx;
					}
				}
			}
		}

		.product-comment {
			display: flex;
			flex-direction: column;
			.product-comment-item {
				display: flex;
				font-size: 28upx;
				padding: 30upx 30upx 0;
				box-sizing: border-box;
				border-bottom: 1upx solid #e3e3e3;
				.user_icon {
					width: 70upx;
					height: 70upx;
					margin-right: 24upx;

					image {
						width: 70upx;
						height: 70upx;
					}
				}

				.product-comment-item-message {
					padding-bottom: 32upx;
					flex: 1;
					.product_comment_user_name {
						display: flex;
						align-items: center;

						.user_name_left {
							display: flex;
							flex: 1;
							flex-direction: column;

							.user_star_content {
								display: flex;
							}
						}

						.add_time {
							font-size: 24upx;
							font-family: PingFang-SC-Regular;
							font-weight: 400;
							color: rgba(153, 153, 153, 1);
						}
						image {
							width: 26upx;
							height: 26upx;
							//margin-left: 10upx;
						}
					}

					.comment-content {
						line-height: 1.5;
					}

					.comment-img {
						margin-top: 22upx;

						image {
							width: 148upx;
							height: 148upx;
							border-radius: 4upx;
							margin-right: 10upx;
						}
					}
				}
			}
		}
	}

	.detail_imgurllist {
		width: 100%;
		padding-bottom: 98upx;

		image {
			width: 100%;
		}
	}

	.particulars_item {
		display: flex;
		align-items: center;
		font-size: 32upx;
		font-weight: 500;
		color: #333333;
		padding: 26upx 28upx;
		box-sizing: border-box;
		border-bottom: 1upx solid #e3e3e3;

		.item-key {
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: #777777;
			align-self: flex-start;
		}

		.designation {
			font-size: 30upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			flex: 1;
		}

		image {
			width: 18upx;
			height: 30upx;
			margin-left: 12upx;
		}
	}

	.footer {
		width: 100%;
		height: 98upx;
		background: #ffffff;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;

		.left_message {
			flex: 1;
			font-size: 20upx;
			font-family: HiraginoSansGB-W3;
			font-weight: normal;
			color: rgba(51, 51, 51, 1);

			.name {
				font-size: 22;
			}

			image {
				width: 36upx;
				height: 36upx;
			}
		}

		button::after {
			border: none;
			// background-color: #fff;
		}

		button {
			// padding-top: 5upx;
			line-height: 1.5;
		}

		.left_messageb {
			color: #cc2636;
		}

		.right_buy {
			flex: 2;
			background: #FFBA26;
			font-size: 34upx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(255, 255, 255, 1);

			.big {
				font-size: 34upx;
			}
		}

		.bgr {
			background: #FF5255;
			.top {
				text-align: center;
			}
			.contact-button {
				background: none;
				border: none;
				color: #fff;
				font-size: 34upx;
			}

			.contact-button::after {
				border: none;
				color: #fff;
			}
		}

		.left_message,
		.right_buy {
			height: 98upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.top {
				margin-bottom: 10upx;
			}
		}
	}
}
</style>
